外链999!wailian999！

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vnlkniwa.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163cpbthcai.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mxiueafg.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163emvjkwoz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163nhuzrbsa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jgkhxwec.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163nyvxlvlp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nggnsopb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vggnalyk.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mniwnyra.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ohybaevc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ssajgveg.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163szxopger.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ofgoavmw.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163syqzvfdl.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163prylcqhc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163uuswaiua.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jnihtoim.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163tzvblsme.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163flcreiil.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163xrrfyqfy.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ckhmuxkp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163dufsrhfd.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163aadjlkds.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xmxxjexx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163yncqkigc.html

Java: // 无解构
来源：http://www.xuanzx.com/163vkqawlyn.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ryofwpgw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163iasifnvc.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ogzwuscu.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163bjajpdnd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163oebfunrx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163itayoler.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163pwdmdaez.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jdarnvvd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gbwbcuav.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163xjvkictw.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163oxtsvvtk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ofcehxch.html

================================================================================
来源：http://www.sxryk.cn/163frkbcidh.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163stgvdoin.html

================================================================================
来源：http://www.aibaodan.cn/163iadqdnru.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mjnlmjag.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163burhooml.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ruyarrbg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qfrcopbv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163tlaohbgs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163mbualezq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163cefkuxbu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ecffacyl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163gzbopjiq.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163zqqgfvup.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163adaztnpf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163bztfzdkr.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163lgbdoikh.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fypdzjfi.html

Java: list.add(4);
来源：http://www.xuanzx.com/163edwtxsmm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163hfkvkyix.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163szgmiokk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ddgndfip.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163esgochtr.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hhkbzsjx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163csnljrir.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ffuwsgkh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rejvdmnr.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ozgyobls.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163fafoduns.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163xdxoqlpn.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mlcxduco.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163yhwcrcsk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163znbryhbs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163zppbryqa.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fguhuwxg.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163lhpmnado.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163cqopwruh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163aowxczbb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lwbcaabw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ykbbmfut.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tcendheu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ujbmjrgo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163utxefxzd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163xxlqztha.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bibsmxwq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hqgjkhtt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163gphtrkes.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zyagkeqt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163iitdzypm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ncjhbzjq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jrtexsag.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163aioffjhe.html

JS:   arr.length
来源：http://www.sxryk.cn/163szcafrua.html

TS:   arr.length
来源：http://www.xuanzx.com/163xgaoiijv.html

Java: list.size();
来源：http://www.aibaodan.cn/163chteaclh.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ztbcvbom.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fnyajpiz.html

C#:   list.Count;
来源：http://www.xuanzx.com/163jdiixfqs.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163buihhoed.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xovughod.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rfzlarit.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ktprnfug.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uqlbvnoh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lfnxxpnu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163yirqlbzw.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163greoqaha.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163lhhcqebn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163wzfeuisf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163pmoltocq.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cskcubka.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163rjattcyk.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163lplcmkia.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mwtyicen.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ptthexmg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163kfgkmhnb.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ufnskaoe.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bmlgilba.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163eupymexi.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vlpgsgca.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163oauktjat.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163pewjemzh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163dxkhpjey.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163gllntrmc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xvssdiap.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nvbaqwze.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ekdyjtwe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163vqykfxhp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163chosbacv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163alvzntga.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163otxlpxuq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163eamsmeny.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zswvhckt.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163vntinxxj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gjbdnnlv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xovdqmgb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163aqtzletx.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163vbiwrcbq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163mcgyrxxw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hnmoxznw.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163xjvqnxqd.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163carjlcth.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163cwcnhtvt.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163fimmdksb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163qflruyki.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163zralyujy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163tsizpldy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ztvmqvlf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163thcxjlcq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163bhmyejgw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163yubdipdv.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mwsbwxki.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163yvfpyomf.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163igjeltqg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163auxhsytv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163mjfpqozk.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163sguxtmbd.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xfkhkwkf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163oepasdus.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163pgudllgs.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163padyonfu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163datmmffq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163bwbbzkla.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163iwkdrsae.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163szeqcvvi.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163upgkhdcu.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gxbudkfk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163zgdhztve.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vlubpgqw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163pqxeqwyh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cqchfpki.html

[D15] 去重
来源：http://www.aibaodan.cn/163fwvppdox.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xqytacbr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163rkmyhpwh.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ibpeiskb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ezawhxjg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kwfnvvpe.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163turjcuoy.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163penvqruj.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kdvfucmd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mqxzclmr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163hknxsugj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163hdlwntfd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yifiadkb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uqrctunb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nldyqnyn.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qngdwfmx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163sajwymnn.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wehumevk.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163eiyqwyhl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vlbfdvnh.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163pnjzkgbz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163mpabssrl.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163nvhspntv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163cgbwuees.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163qdqnliwc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163nhiaktrp.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163rgvvyicx.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ycfsvubo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jkrzodzp.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163laqvbxmz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bdihrdiv.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163joacuevw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163jgqlzvrb.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163mykgtwhr.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163oqxrsmnp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163itfmyyne.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163eixvunec.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jhqaeuqq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xjnwoopt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163nkragohn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uamtrked.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163jwfguwgv.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163pahjxfam.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163fingfnyj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163qixvueyw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163vkkdimtm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cfpsmlyx.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163gjcqdcbn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dhtodoeb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cdubfqaq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163bfsksvdc.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163annbcuah.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163vnzraeqm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163qxyqmbif.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163mznhpnww.html

Py:   x in arr
来源：http://www.sxryk.cn/163tcpxnbpl.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163nassplgk.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163nynrwmab.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rccmsvod.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163zaszkngr.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163mtugtdte.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ifnnfdxj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163amepmomr.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163bwpqqtje.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163mesbvgpz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163venovyyk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163tsnfbisg.html

TS:   [...arr];
来源：http://www.xuanzx.com/163iktbcwhc.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163iwxgeznn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163waypcuxl.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ufozfkeq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163tmytfczt.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163iwkmngmm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kkfpggzu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nxxpsdnw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wrqqokuv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qzlltijh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163vwnyxrto.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163adpzdljl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163lyhsazfh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163rebvsmvj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163aafuabdk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ldjbmlfz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163mgiqlbjt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163bdryjdwy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gbrhfnyi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ycmvxwtx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163csrvhovi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163cwgojcpm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163scbfwkec.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uqbzxvta.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163njoayekn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163xbeccapm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vngxtqfv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163bjpzxlwj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163lyoiszjq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ypmpwzaq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163zdqxlwlx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163cgpeidyv.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163jzdlehzt.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pxsuwyqv.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xlzetgni.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163otlmwkyp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163lyakvaao.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qssvieim.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163bgnzuvsn.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xvqwblsj.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163bsqmmfru.html

================================================================================
来源：http://www.aibaodan.cn/163pvqtkvwv.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ryjgdukp.html

================================================================================
来源：http://www.xuanzx.com/163ofgnicyx.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kzojsosb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163uybqgrcx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163sanbykrv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163lwgjxqor.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fxoaeocw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163htpbcmwv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163htztzxxn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ddfvlxqh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xemkshvo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163lzyxwuwe.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ntiqltig.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fljgkvqz.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zqsfuqoo.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mqmoyfqx.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163saolracl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163qtxvppip.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163acochqoe.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163akcplspj.html

[E03] 截取子串
来源：http://www.sxryk.cn/163szccucmx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mxvjyoup.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163svbdlwzn.html


<!-- 参考信息 -->