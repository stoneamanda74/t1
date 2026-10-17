外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163dnvbzmwx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xzmbgnvd.html

[C08] 闭包
来源：http://www.sxryk.cn/163euuzlmdq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163giplrjpx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163modxuewo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163smkefvry.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hwjbodmy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163uaojikdt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163frsyzvgz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163xiwmqkln.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163spfzwetj.html

[C09] 递归
来源：http://www.xuanzx.com/163lilfsjxo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163goolsarp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163fhtdpiet.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163byjbkrqa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mxotxynd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ktsrdbvj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163kldaqtxk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163tgpfdzku.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wdjcquhv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163eehbbdlo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163nuxyimya.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163uroonyzl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ivjwelfr.html

TS:   同 JS
来源：http://www.sxryk.cn/163jqytmxjq.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163fvhkvoxb.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163qurmsenm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163dxlocbjo.html

C#:   块级作用域
来源：http://www.sxryk.cn/163bwnfhxck.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wiwkwjvb.html

Py:   from module import func
来源：http://www.aibaodan.cn/163wbprwsdv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163yleqkryc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163jpmkcyiv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163vhettpgd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163yzrjdyxt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ltrgxots.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ydjdpsbt.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qjwopren.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ytkcajwl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163oryexzxw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ekayjxdf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163idvzevze.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rhazicky.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163szunbhnt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ezxcbsbg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163unbpzsdu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163eugruena.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ilkrwnme.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163yislnuhp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xxljllyl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xmfxsfrd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dlhtfkco.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kcmurvft.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163acqgfajy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163idzkvlqm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xllukcep.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ryaavveo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zlayumze.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163blqjounm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163dpdmykjx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163otbhebvt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vwujbpoa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163tgovnxmc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163uowednnv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ulvqhety.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ewvbnohq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ekpzayug.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ecywnouo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dqcaylof.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ltsdmgmq.html

Java: // 无解构
来源：http://www.aibaodan.cn/163mombmtri.html

Go:   // 无解构
来源：http://www.xuanzx.com/163liqiekvd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vqwhqrkx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163kfogkbsq.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163rozikhcv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163pvbhxlnf.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ujgeigct.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163obslxygu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ibiimstn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163zsrlsaoi.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163njevsjts.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163kkfnmjqt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rpbtlcmy.html

================================================================================
来源：http://www.sxryk.cn/163rhtyislf.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163hwezehfv.html

================================================================================
来源：http://www.sxryk.cn/163xguocjtz.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mprgkqmy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163scpgantv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163twrmrllm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tbpghqgo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163inorllmt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163thyjmsoi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163soaoipaa.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jgngahvo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163vxgnijbu.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163grgquvyn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163dlywvzdr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163pcufomkp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163icgvmgyv.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qepwrume.html

Java: list.add(4);
来源：http://www.xuanzx.com/163lquxzcuq.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163xuiaggox.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163knqwuwfb.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163wgoengpm.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163nncaxluu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163eabukztp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163jboeodjr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xwoccqxz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163urhdskxj.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163bsjokcvf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bkwtlyao.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163tyacvyzp.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163taaqyiih.html

[D04] 删除元素
来源：http://www.xuanzx.com/163xxiqpfhr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jseuruql.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163snuilewd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163vccbpnjh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kappvlwe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bnajhrcj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163bxgqilra.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163yrpocphg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163npfrkady.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163dimsrpse.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163igpowaat.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ftdkkyhx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163fqxuemby.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163eqqzcgmb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vcydjzgk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163qqzxxvdg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dkowjjny.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mtqfckje.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163cyawqgqu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163bdcdbrze.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163yqgudfpr.html

JS:   arr.length
来源：http://www.xuanzx.com/163sswsbhjq.html

TS:   arr.length
来源：http://www.sxryk.cn/163gouudymw.html

Java: list.size();
来源：http://www.aibaodan.cn/163fqcyvegz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mfjythaw.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163mwmhvipi.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ikfnxvdb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163msxklznr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ameldili.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gfkrowhc.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163uzfpqtgu.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hwnithsz.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wbyloxjx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ltrbhdic.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ivauuvzn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163dpscxnes.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163mwmkzyrq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163uadlvtii.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163eayrtrar.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163kxgsrsor.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fkwqqetp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163fewtturd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163dkfchedw.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163rkfwndsy.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163tykclqxf.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163imbxmptg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163edeipgbd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uxvlvbno.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163eugciusq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163dcggwpnc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163iuvcvykd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zzuoijsl.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zgprcqak.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hngnoxly.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jehkegwj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ncxkprdp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ywxutlyi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163oqzdlggb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ziapgqla.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163psvitcwp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163iysfmoxr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vfkdkgnc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163tbazisde.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wkofwxyu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163dogqvwdo.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163mcwirlhz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163douwxqwn.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163cdzcovff.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xsstpvti.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163vzrpsbag.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163wascoukr.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ihghufud.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163sbgoturm.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163btflajxj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163uutexzjh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163boyipghq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yqsmcqsm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163pxylxvgc.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lsswiojk.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163loccjviz.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163txummqgs.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mvibpeuv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163pxulmojb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163xeumsxml.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dmmsimfh.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ukgazaqu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163umlsieue.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163vmurxoqp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163vzleszrr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163lwirharm.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ddmnotag.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hckiwihp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163syidmvwk.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kcvgfihe.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163loikdngt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kfdkmdgo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kaevapdo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163plqlbfgt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cxuhchji.html

[D15] 去重
来源：http://www.sxryk.cn/163swvepmfz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yamxjdxn.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163pjawuqyv.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wkasdvik.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cjdcwond.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163otglwmmz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163wcsfzxch.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163izaxjqhj.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163iocjxbuw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163srhxtmaq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ieynwqdv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163yzsdckvc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hamysagm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xdhixcpc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163mcbpezoy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163jclfkmzn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hcfvnoyx.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gtiosvau.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163kjqrcbpq.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wwxsmnsh.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ksugkvvj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pgjtpeyu.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hwncmwbq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jcevvqnw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ivexpopu.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163cuwogbhw.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163efeunslq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jgbeemdv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163bkxznvcc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163rkgyiinb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163nlqvngoe.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gnxjhbdf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163hhyyrnyr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163yxvxpsfi.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163mgfzbalt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163bgqaynzw.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163vhmgkkfp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163oaikcxrz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163jmtmgalk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xpxxlaug.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uqqxuymq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163tozbazic.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xhalhged.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jnizimrt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ovedzixz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163znxavtjt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163asahqous.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vrjbpenl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163irgliume.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163reiwhqpt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xsatxmil.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163yvawzpmx.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163knqbluge.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163wiwutgcf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163deinxjsp.html

Py:   x in arr
来源：http://www.aibaodan.cn/163dzjgbxct.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163glcgmafq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rsrkllar.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163njcbkbat.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163jafyqugl.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fvbggazv.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ehphedic.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163bsgssuyf.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163yrqmspre.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163gnrxhteq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163uoueayjv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163mobhasgn.html

TS:   [...arr];
来源：http://www.xuanzx.com/163eweionnj.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163aznrwqbb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163imroxgqj.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163crgzlyhw.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163bmaswsjx.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163rbrcxfwv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163szdmgnql.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163akdaaeqn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163atlrkuen.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163clobpeji.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mjggmemd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rqsdxhgm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163wsjbaonk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163efdzzcli.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163xegarpod.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163vnlhtmsr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163wczkzmqx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163yxajktds.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163gpqahary.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163wozzcwlx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163fsycjqzo.html


<!-- 参考信息 -->