外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163pgrdteqb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ohsnpuzh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hvfzbpzl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wobvnsdi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163nmwbahxi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163mweakbnw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xlvkiiql.html

[C09] 递归
来源：http://www.sxryk.cn/163rrcpprkn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163obwnuvif.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163uotracqa.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vbzhzycd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163abmgbadj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163muaglxwj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163tdrbydmw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163srwxwwtq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163rdqozhim.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gxtjftvj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163zrgfqyck.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hlwaejus.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163tmrkxcgl.html

TS:   同 JS
来源：http://www.xuanzx.com/163lfikjoge.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163qqpsoiic.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gxrthsrb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rboeklps.html

C#:   块级作用域
来源：http://www.sxryk.cn/163dourlijd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vwgqgwsv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163patwwrck.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qgzilelm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163unyjdlgz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qdhbzpxj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163oyrhfjbc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zculubpq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163criwmntl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163meeqspbc.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163rszdeqtm.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ewikevti.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163wpeaexfa.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163webbdgtn.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163tuibvydp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163clwhyfpg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163unwgphpz.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163edlhggko.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ofkspqls.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163yajxamzj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ljxzojtj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wprjemsi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gnjyxtcn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jzzmcilg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hkfqxawv.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163qsetnhjc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163uhvmjxtr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163wffgevbf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163aajobtin.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163hemiaojj.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ngemmxdm.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163paboehei.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163smmbkfqx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163pebznrin.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163sjhqiraj.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163oefsgzeg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163dyskrrsg.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163niydamgj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163peromohb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163hcvqhjrz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163nurregmd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163wcrdjsyi.html

Java: // 无解构
来源：http://www.aibaodan.cn/163fmhvfgax.html

Go:   // 无解构
来源：http://www.xuanzx.com/163piajpfrl.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163sztqufhw.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163dibfojnz.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ssnqqfep.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rlldvcrn.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lxrlhtzt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163mmbutwfj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163swtfbuqb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163smakagdu.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jodvueaf.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163noeqmcno.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163exwmstzq.html

================================================================================
来源：http://www.aibaodan.cn/163rgzncarx.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163grekhtev.html

================================================================================
来源：http://www.sxryk.cn/163lhfsslye.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163unifigpp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163llecuihi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163yktjzrkr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163btpkjuod.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lpjmrzop.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bkinurcs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163uxkfqsxn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163xmqsmvzy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ocgvlcve.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163lksqvmgm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163oxonloai.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163diqdhota.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163grokjkgc.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163hevkxxsw.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ggpbzdqp.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163kiutojrr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163jswuxexx.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ypnvkfzw.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163vhynvoch.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163uomdpamm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lxypckvg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ipfscbtk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163lewwbuxa.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lcsaxlmd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163okxnnvfj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163fymnampq.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163nyrtbkwp.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163esfyebey.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163hqwsdhsb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ddbddckr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ckssuqnt.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163xfnvuvjf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ijqhswuu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163zdljtali.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ebbaialn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163romddrlw.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rzjkvlzo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163thcodobj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mvvicfod.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163wekzeqzu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163rjwjdhmu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jfjnqlul.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163cftjalqx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nzjrgibs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163cnvhddgp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163acjfslsg.html

Py:   len(arr)
来源：http://www.sxryk.cn/163igmarptj.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ucoxeweg.html

JS:   arr.length
来源：http://www.xuanzx.com/163mopelmcy.html

TS:   arr.length
来源：http://www.aibaodan.cn/163kjdatdto.html

Java: list.size();
来源：http://www.aibaodan.cn/163mwmtonvs.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ndagylng.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163wvkawwvb.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mjebkfqo.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dbbdqhlw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163hmmmcgnm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rbnoaade.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dqomzmpj.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rscunpke.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163tspvgnss.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163nsipokvq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mvgfymwz.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163lmscyfqb.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jbpnidbh.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bluyisrl.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163odiyigcm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163zstqvspr.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163yorvhwce.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ugtucvbs.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163gvwyrmop.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163fufmunzm.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jwvrunhm.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163oynvlkcq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pwcobtbb.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163icmqpfew.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163sixigpkc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163luhmwgyi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163rkuhgxbu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163lzvktvdz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wbsvbmql.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163fnrpuysk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ghzbfllu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ihmvsxni.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zvqtgpyi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wymqmzhr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wwtzmyyq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163grwqhmgo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wvbxvizp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163jkauqhwg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163dgehvpbg.html

[D11] 反转数组
来源：http://www.sxryk.cn/163hqyiwbum.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163nuruckbh.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dwmevtgb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ucsjucvh.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ohigkhqw.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163jrafufyv.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163hdvdtadu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ahkwueyi.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163tojcssoq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163jgncgazi.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163vdbjolhn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163byxkhpqp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wkvlncrl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sypxdqjy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163pioptxxt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163aowdamvr.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163tetcuixc.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hwbjaplw.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ekjzxdxz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163nwefaihj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163anlkgaen.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qocsnihn.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cgyxtxpc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163vrcfkjrz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163dwfhmhie.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ffyqlfap.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163giuygjpu.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163sarzvjnf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163aqnmyyob.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hxxglonx.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vwaqthno.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gczckenf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mazlnuxj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hvyhdpeq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ogzfaojo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bohxdsxl.html

[D15] 去重
来源：http://www.aibaodan.cn/163duyrfbpy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163fdqvexpw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ebrjzefm.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rlcdasit.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wbrzlsfe.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gptliure.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163begbxhhn.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ahmefuwf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ptemylrj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163cbaxtidi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zaqkfszp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163soownojl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cpolqaau.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163wnzptkxt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163avwnrpyf.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163uccuuwnt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163fxrmqtdo.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163etirqsms.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wqqnkhas.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163gdpgfotl.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163unisnvyg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163azxoiugm.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wruzgeqh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vhrnwapl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yssvdsyg.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163hhivqurj.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163eesldrux.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163hjfmhkzt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hhokxszu.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163hnnmrefn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163agbrxezl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163tinxaqvq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163fgprsdrr.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163mxuxaepl.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kdltldev.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163acmkhsjb.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rigdoorg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163dsnoerxl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163uznznfsu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163kfrrdhsh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163sscydxxm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ieedacxd.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163udzrziuz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zmujfscu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163zmjikakh.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163cyvenvjh.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163sqrahexo.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vpwvslnu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rouhdnts.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bjrycqxu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qrcuatki.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163esptfxkn.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163vspukgur.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163momivsso.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wmkliueo.html

Py:   x in arr
来源：http://www.sxryk.cn/163iiuctfgi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hsgaehch.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163pcqovsta.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163afvgwslm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163pigeldbo.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163tbwzodlx.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163qsuphnzj.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163hwrsdvro.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163uxfbdqmj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163kjgohuip.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163yhowsosl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163maxeertt.html

TS:   [...arr];
来源：http://www.xuanzx.com/163kbsnfowd.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qcmhmbqu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163yfgznkvk.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163sbljnahz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163pexmfeea.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ftrmskqn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163avacsydz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163lgwzipen.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bniwrjbh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ckrxwjur.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163mewchgrt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ixlquzmz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163sgdqdogi.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ozucxbod.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163obqtvuad.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163fyjxaqwp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163cstqqzui.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163rkysivip.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163oycmfmku.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163bggtqeya.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163xsiqfgkd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163tnlgwxyt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163glsbqhiy.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163alkzkhzq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163bekwbtdf.html


<!-- 参考信息 -->