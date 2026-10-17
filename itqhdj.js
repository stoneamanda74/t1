外链999!wailian999！

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ujzzqgsf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jpynvzwq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lmsaccno.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ngvmflep.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163vjciyryj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jsfolijw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163epfuwrax.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ofgxswyv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163tbpptaoh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rsnnfbyh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163rmlixtax.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163migujdmc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nubkitol.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163dzelwubz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lbzphhqh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163oevrvoqf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163wesqmszt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163nijctnng.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163wskapclx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163kvzerueo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163otrmduow.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163fdngsjdv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ewuaxndb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ktqqhfqk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163agnzcurl.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vbuvxbcu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gsdwsfxk.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ulshuejc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163uwgibssj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qjahvsmn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163cikockct.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163evihgdci.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ipjeorbw.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xdqnqblc.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163fwmbvajn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mqukclev.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ftzdoqhj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163kpylskae.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163bipwyevg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ifaynogu.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ibkokkzz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163allkkbuh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163uecuvyph.html

================================================================================
来源：http://www.xuanzx.com/163mhwhsjma.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163pjmvltwo.html

================================================================================
来源：http://www.aibaodan.cn/163uftaujvh.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rgzxqmdu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163stoodhtb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163zwbiuuin.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mlmqabdu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ebxevitz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ynmgsrgl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nfgpkwaa.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163zinfyakv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jbsrmogu.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163fperwvtz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wpxdmywn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xpmrtxfl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ylqdhmyk.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163osisspvl.html

Java: list.add(4);
来源：http://www.xuanzx.com/163couenrcy.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163tekuobrv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ekfmtnbh.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fsoffwvd.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163wsmlpyzt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163uhklwsml.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163mbzybgiw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qomraugi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163svkbqjnj.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163igztgldr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163fqkyudoe.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ttdkcgdp.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163japrjmaz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163nwohddwg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ltuhzbyu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163kwvxwool.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163nsrraozf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163mdetrddq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jsnclcwa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163mdhrhxjr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163fexcnngz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163lxymjxqq.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163heyokmsp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163emkshoiv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zwlzyslw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163igpaxquy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vxkxfdkx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vxhmhfjz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ubclvudo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qimnkpjq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qkgnkqzy.html

[D06] 数组长度
来源：http://www.xuanzx.com/163bdtipcvf.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jqoffheh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zfbewjno.html

JS:   arr.length
来源：http://www.xuanzx.com/163ybqblweg.html

TS:   arr.length
来源：http://www.sxryk.cn/163yleavcci.html

Java: list.size();
来源：http://www.aibaodan.cn/163zragivhz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lneoqumi.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ukwgzzjw.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wmslchvx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163jvtqeltl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ryogqvcn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163rgskgpcy.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dbqzmqfu.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163xztsvhtc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163upqcqnml.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ekvissmy.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163sjbssqth.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163yqaxipjv.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163acanqjse.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gruxfztk.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163cxngmfib.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163shyonrph.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163zrsugdrc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ohxjsiia.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163gaefpaiy.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lyxagaus.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ffifuwhk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163nipnwoca.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163igektgzx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163gzvjmamm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163qxfeuixh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163sowgebud.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jwuykrkl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dvjrmdij.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sfbyharv.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163deowllis.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163nphdfatx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163rwwtvlhx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163etajgdps.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ubgxknqh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ivvxpcge.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163hshterzq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163cdzuqqby.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163gtvtmdcb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ghpswhfm.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163kyoxbhrt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163wbpwpokn.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ttyjszvw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cjxlnyon.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ujabjkbc.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163zbzlfavn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163rfxnnhuw.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163tjavodwr.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163sowesobs.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163jxwslyzn.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163abyspist.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jyfekupw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163saxzijoa.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dyrofohw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163rpagfwix.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163sgtceqoh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pymjqthh.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xhtijtyg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163tawmeibf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163yxzruvqk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ahtqowoj.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163onxmgjip.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pbogdiqo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163kbqznbbw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zxminorp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163uvsyupax.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qxyfmsnx.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163dqnwvqec.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163oddmjykf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163sytrxbyu.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wivaqcvg.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ysvsawbq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163orjwodlz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ramkjyqy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163wwwnnwhh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163pbyfrjxt.html

[D15] 去重
来源：http://www.sxryk.cn/163awqxmzrg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ctculdec.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ebwnpeli.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163eipnvukn.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163naecfgaa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gecuurkw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163xckixoyf.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163scaxolsf.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163keequxzz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163tphvpqel.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gidxfqxe.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163enjjrtsk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gbzqhjen.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163tnqmrkzz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163tbdrtlkp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163yytyrrca.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163wgcttllv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163fhasmlbf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163errinbfj.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ytzxxeew.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163wsgdulzk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163bluqoynf.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163iwtddkcd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jathjovm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163pzfdwbuq.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qumowyek.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163fqkajpwp.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163yptpvdvg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ewusilrf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vtxckhaa.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163tllafhyj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163omyxjvlr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ehesbhpb.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ceyjkmjq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163yykvdrob.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163fmpzouam.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ntucsgtp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ohqgfxrp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163yzynjffg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163pfrcgtek.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163bcuoznow.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163bbjbvlha.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jixxqgxp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ssfqustb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163xxnpqoys.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163aiqvxhsr.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163wqytohov.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dwqbjtuv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yplfnqrw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wbxcfqfv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wkynerqq.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163qloywogj.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163fjlycapc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163upafnsmh.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163tiweadtb.html

Py:   x in arr
来源：http://www.aibaodan.cn/163juhqzzlf.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163huxbfrpa.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163juicldts.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ojmgzrah.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dwyzxtdb.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163uqpcspqt.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ltgvoakm.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163yczmxsiz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163tfdhvsdj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dqlpvvrf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163cpxdqexx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163idrtscjp.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ijcvoqhy.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163tvpuzvmn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163bhtmynuz.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163gmroohgt.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nvgfjnba.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ijcwygzy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163afemewbg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163urcbcozv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cznmukik.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ixvuedlo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ixtxhwoh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tmfqdqew.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163riocqfcw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163oazyzprr.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163kxrnvmri.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163olfxrkjw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163hdxoommu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qjjxvlbx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ncsktaki.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xaevulur.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163uzfvmvgp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163fvlvwkci.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163icfhnauz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163aollobch.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163myldvorq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cxhzopkn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163dferdkxn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163fkxiqgru.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163stfqcedr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xdeefgig.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163smrlulwp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163gxtwqyuf.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163eabufhho.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163nkfejmzt.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163logyhbbd.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hhtfrexb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wjxuvdcw.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zrlphrkf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ommmhvpn.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zpnxkunh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163gcxkmiyc.html

================================================================================
来源：http://www.aibaodan.cn/163fegxkhri.html

E. 字符串处理
来源：http://www.aibaodan.cn/163fcnegfmj.html

================================================================================
来源：http://www.xuanzx.com/163vonzwhgd.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163wobfoktz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163srapnnsn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163qcwqrzxu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163narzljjr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163frovuqve.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163dpbpsfut.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qrxgbgkc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163tqjtgbnj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gixcpgml.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163uwkyahbk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163qtijiqxz.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163fzhewzlf.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fxaokdso.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rzuqswgp.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163pnhgcdgk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163yseyplyr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ulgcrago.html


<!-- 参考信息 -->