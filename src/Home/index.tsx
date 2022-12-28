import { useState } from "react";
import { View, Text, FlatList, Image, Alert } from "react-native";
import { InputView } from "../components/InputView";
import { ListTasks } from "../components/ListTasks";
import { Logo } from "../components/Logo";


import { styles } from "./style";

let id = 0;

type typeTasks = {
    id: number;
    description: string;
    finish: boolean;
};


export function Home() {
    const [countCreateTasks, setCountCreateTasks] = useState(0);
    const [countFinishTasks, setCountFinishTasks] = useState(0);
    const [textTask, setTextTask] = useState('');
    const [tasks, setTasks] = useState<typeTasks[]>([]);



    function handleAddTask() {

        if (textTask.length === 0) {

            Alert.alert("Erro ao Adicionar", "Insira uma descrição na tarefa")

        } else if (
            tasks.some(e => e.description === textTask)
        ) {
            Alert.alert("Tarefa  existe", "Já existe uma tarefa na lista com esse nome.")
        } else {
            setTasks(prevState => [...prevState, {
                id: id++,
                description: textTask,
                finish: false
            }])
            id++;
            setTextTask('');
            setCountCreateTasks(tasks.length + 1)
        }

    }

    function handleRemoveTask(item: {}) {

        Alert.alert("Remover", `Deseja remover a tarefa ${item.description}?`, [
            {
                text: 'Sim',
                onPress: () => remove(item),


            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleFinishedTask(id: number) {

        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, finish: true }
            } else {
                return task;
            }
        }))
        setCountFinishTasks(countFinishTasks + 1)


    }

    function remove(item: {}) {
        setTasks((prevState: {}) => prevState.filter(tasks => tasks.id !== item.id))


        {
            item.finish ?
                <>
                    {
                        tasks.length === 0 || countFinishTasks === 0 ?
                            [
                                setCountCreateTasks(0),
                                setCountFinishTasks(0)

                            ]
                            :
                            [
                                setCountCreateTasks(tasks.length - 1),
                                setCountFinishTasks(countFinishTasks - 1)
                            ]
                    }
                </>

                :
                <>
                    {
                        tasks.length === 0 ?
                            setCountCreateTasks(0)
                            :
                            setCountCreateTasks(tasks.length - 1)
                    }
                </>
        }



    }


    return (
        <View style={styles.container}>
            <Logo />
            <InputView text={textTask} setText={setTextTask} newTask={handleAddTask} />
            <View style={styles.taskView}>

                <View style={styles.infoMainView}>

                    <View style={styles.infoView}>
                        <Text style={styles.createTasksText}>Criadas</Text>
                        <View style={styles.counter}>
                            <Text style={styles.textCounter}>{countCreateTasks}</Text>
                        </View>
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.finishTasksText}>Concluídas</Text>
                        <View style={styles.counter}>
                            <Text style={styles.textCounter}>{countFinishTasks}</Text>
                        </View>
                    </View>

                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ListTasks
                            key={item.id}
                            description={item.description}
                            finish={item.finish}
                            removeTask={() => handleRemoveTask(item)}
                            finishTask={() => handleFinishedTask(item.id)}

                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.list}>
                            <Image source={require('../assets/imgs/clipboard.png')} style={styles.imgClip} />

                            <Text style={styles.listTextBold}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.listText}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>

                        </View>
                    )}
                />
            </View>
        </View>
    )
}