外链999!wailian999！

[C14] 泛型函数
来源：http://www.aibaodan.cn/163bvwigbtm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163jmjdqbxf.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ssnwehuc.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163dmlqcnbb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ejyaqxwy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xibawjae.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163vocruzyk.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163cpbztuvf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zlfdfbfm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ecjzmmnm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xbnmynwn.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163grvadxxj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ozwhivlw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163qrfelstm.html

Java: // 无解构
来源：http://www.xuanzx.com/163rtokhglg.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163umuxpkip.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xvsgjzws.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163dbhrwefl.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163kdzsmrhi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163hkahxlwr.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163algislnh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163sukduuhb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163cxxonhha.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163wfsbftoj.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jroihccz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163pneuirgu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ybjgbgrj.html

================================================================================
来源：http://www.aibaodan.cn/163ckenmnfx.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hobkvnbc.html

================================================================================
来源：http://www.sxryk.cn/163bapofeel.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vopmopno.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rhymtlyc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163tohfckqk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163tfynolfm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163hgphtddx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163gocqleni.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kqibqosk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163hpgvhosk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xblpizaa.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xvhamtna.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163tcslnnjz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163pbicuiej.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163bessxafj.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163intjjkzw.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163yyykbrwi.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163absbqkqg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163obwrgfvu.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163zodvwwex.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xujqoluv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vostepal.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163kxsjlufh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jrmyoaqd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ypjcjdzz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163lyilqkor.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ffuvkmqf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163gyehgwmn.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163hkzhhodo.html

[D04] 删除元素
来源：http://www.sxryk.cn/163txwnxsnj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jsouvlzh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rlwsmuvo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163zwrihwet.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163fjnzsdov.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163qjlpghgl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163zgwvctql.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ckacxqdi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lkenyxhx.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163diumsijq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qzfcotmx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163oekdfape.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163qoogbczl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163hqvaibry.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xfkaosew.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163vjvgolrg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zncavoug.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163isuwruqd.html

[D06] 数组长度
来源：http://www.xuanzx.com/163fhovitck.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163rvpjvxup.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ijulbgld.html

JS:   arr.length
来源：http://www.xuanzx.com/163nlvjqqnp.html

TS:   arr.length
来源：http://www.sxryk.cn/163zfnqikgq.html

Java: list.size();
来源：http://www.aibaodan.cn/163ygizopmg.html

Go:   len(arr)
来源：http://www.xuanzx.com/163sffulmgi.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kdztbckx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163tbjqgoow.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kalldguw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163aevzfsjk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163izlhzjgx.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163sxmzkngt.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xfuhxrsq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163suwgjdox.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163bcistpey.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163taarlfoq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163fhrawqwd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163evozqwhi.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163mbzdfeok.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163iqjpvmjf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163gbecdqmg.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dtglacne.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ijaeduvr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163hdjkubnb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163lrtraqde.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ikqokuif.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163qzkrqgzw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gywzcoqz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ocmhxebi.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163aeduapek.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hmcbuxeh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163aewzywti.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163tysymkqy.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zfjwqloz.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163kijfkcsp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163sspbfhvl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163sincwcqh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ptrmtrjp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mfbqqaol.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yedztjfd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163pvxqwmri.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wojplqxn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163lshoebyn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163xajsbtpi.html

[D11] 反转数组
来源：http://www.xuanzx.com/163raedjzzi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163cogqktzh.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vlciwxxt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163tqundcha.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163thinratg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163rqjxslkx.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163btbkmydu.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163htfwaqfw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ietnjpta.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bjjcwiwp.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163hlsfjyof.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ouaamdyc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cjbvvgez.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fotsdtfa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163cdxnkfkq.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vgvjpnam.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qexurpql.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163milwvcnx.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163aevjcmxz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163yzjdsxgr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vokitwbm.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gaegbeei.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ezmiouzi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163djkmaalt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163edndvtuv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ogvjjrcz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163uzxdagxn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hkcquqkc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zekfshhn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163tiidsuoo.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xctieprs.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163itbnomvh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163dwfaxljt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163oyjnfgmq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163unzmgfwi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ubkeyxee.html

[D15] 去重
来源：http://www.aibaodan.cn/163txraboyb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gaqmaigx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163yneiljlr.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163gtnimxau.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ntxttllu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163zugjgzrf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163zjgehdum.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163rnijizbt.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163tcmwdbez.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163cqcghzeb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mnladmpp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163hsspkwse.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163juiewmqb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ebvbabdr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163tcvqntkx.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mizyicqd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163noqrzcfu.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ziteekah.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ecvomhap.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hdtxupeh.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163llneyqsu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wiqovebl.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163knkimgtl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xiicsxbm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163tlwcpnxh.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163qaosgims.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163lcflimdg.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163vwnogefp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163asokwyzs.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xecvsdvs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163xobwabux.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163gvbriopu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163iovnyyvw.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163avvxusra.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163lngulisd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rjvuekuv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zjrruxya.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163scuikvjh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163kyrpjrhr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163rlrgjpoy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163sdnshlem.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163toysviwx.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ugcbgpjc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163pjdxfpvs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ppyiovmf.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pusrwiet.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zqktpnef.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163lvlxgkyn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fhnslkgt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wecuncrf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163pvvyxpwh.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ngkibxqp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163krvjzqcd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163uxwpeovr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163nqblharh.html

Py:   x in arr
来源：http://www.sxryk.cn/163jlslcyoc.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163btljyifi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163amazapnj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163rqfrlkhd.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163xdeigljd.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163daqhnnyx.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163pbsqzlxg.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163mesksdga.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163dcsopghg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163sqefnjim.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163uimbcgej.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163jsudihzh.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jkbskzyz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163txjuhibd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163wwvwanxr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163udwxzxyh.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163swmiqprq.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163casxkwnm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ufeoktan.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pilahzbh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tzkrdlgx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xisopzct.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fipobhkj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163euiqyjfo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163tnbobaak.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jwcegkgw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163pccexhoj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163cuposwbp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163fotjpjyu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ftfmdotb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163mqszdstw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mrxrwlwf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163nrlrazpk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163cyynieef.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xevdgqub.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ceqahuxr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163qcqlwaxx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xpqbywme.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ozmgzitd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ajxwrnig.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163vbyqwtvb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163camefpkd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163qegsvqfq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163vasmbsdk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ezglybvu.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jpaxgwff.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163eysehymi.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163uhhrtnzt.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163mqzpxaib.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qbvcwuuo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163fgubhbfa.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163alzwaqru.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163cgicteyc.html

================================================================================
来源：http://www.aibaodan.cn/163didzftkk.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qzzigmtz.html

================================================================================
来源：http://www.aibaodan.cn/163hqqbgtov.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163bltmdibp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163boissapv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mwovqyzn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163relxfiwz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cyotbgjk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gxcqifwk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163mubnsfsc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163wzhexnfq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163abajssoo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163qrafsqul.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163mqnukgwb.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163rfeslnmy.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163flkhcydf.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mmymqikh.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ayvidtyu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163hdbpdozn.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yuejdfza.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163mijseqxp.html

[E03] 截取子串
来源：http://www.xuanzx.com/163glcleuhl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163kbvqiogz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rwocskar.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wazkhhis.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163evrvtqul.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163pkowtsjr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ukegpcyn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163etxyigra.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163gnhzzgcu.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163iotbggfm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163khprzxkr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163amgcmbqe.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163nwlxsktk.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163vuyxkghx.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163whmutbji.html


<!-- 参考信息 -->