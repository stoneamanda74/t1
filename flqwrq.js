外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163zsrgbgeu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dtiphvbp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ucmsngft.html

[C09] 递归
来源：http://www.aibaodan.cn/163hkqrromr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163jiogjzvr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wjyzbszi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wdmirjiu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vioqruzi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163mqtfiiqr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zvrsbxtq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163kmqekwtv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163rusekeuh.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cwclvzpl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163hcknyyof.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163mojzmosy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163umaxvfvr.html

TS:   同 JS
来源：http://www.sxryk.cn/163sdtenibb.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163uhtxmkug.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163fumvugup.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163yvchhbso.html

C#:   块级作用域
来源：http://www.xuanzx.com/163xxxqruck.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163zvalscep.html

Py:   from module import func
来源：http://www.aibaodan.cn/163yevhvbge.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163iosqnatc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zqwsadxi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163gyfnexbr.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qxlcmcbb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nkuubptp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163sxvqeyni.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163kwkicexk.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163qgwdloyp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lzhefyin.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163leazmuyw.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163eagjgtdi.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xfiiutlv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vdjwsqey.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163egtojqto.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163vwhvpqxh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163emavvber.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163oeiovsmu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163xlcqtwso.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rbladdro.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163uoyzclsc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ijvgklby.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ugvualnr.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163bmcrityc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ctztnbsd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163jeionniw.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163eatumyuc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fjnwoipu.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163vgovxvvn.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163zodsepvq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163xskpqyvj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wueyevsk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qsimpedt.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163xaackkos.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dklznbpc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163nlenskrr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bzwghvig.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ysriiyga.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163jctkmzfi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163nyzcougk.html

Java: // 无解构
来源：http://www.aibaodan.cn/163pnpkuwkw.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ieachpiw.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xdygalka.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163iidpuuch.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vbrghtmw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163crfrorce.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163wloqzphk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163rdhvummk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163lfabkxzu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163prlhlqmc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163pewdjjrt.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163wotekuny.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wxhuwpsz.html

================================================================================
来源：http://www.sxryk.cn/163vekstamy.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163sfbqopuy.html

================================================================================
来源：http://www.aibaodan.cn/163aakxbkxo.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163mhtmzsxk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163rfzxloir.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163laevwrrw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ypsccfci.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163vhwzfrcx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163kuuhitut.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ecrgyies.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163jruesyag.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ejoscpgp.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163dbbiqzxa.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163wknsfsfz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gxrzagsw.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163fbdvduvc.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163uwrpewtw.html

Java: list.add(4);
来源：http://www.sxryk.cn/163yjnihelc.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163jrfwkaqq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zaxcbtpb.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gygdiehd.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kpsfcaug.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163okmcliot.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163naeoawyv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163rykhvzyo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163qjpiqkmi.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163loeacawj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163rbertqyz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163onqdqnwo.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mioofsjk.html

[D04] 删除元素
来源：http://www.xuanzx.com/163fzvwcfey.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163bawexvvv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gkbxonqc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gcvqgdvp.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163tjnupcqy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163iwuppjvv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163vrlybqre.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163zavdaids.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ejgkmnxi.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163yhhpzkch.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xpprijyu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bzywnmhk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163fdjxrnar.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ixollbjn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ljsngtcb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163bheqqzmo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163onusfiam.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163fphcsbuh.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dgoppuxm.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mdqidyzd.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163rftybgby.html

JS:   arr.length
来源：http://www.sxryk.cn/163cmyzzocf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163oddfjiry.html

Java: list.size();
来源：http://www.xuanzx.com/163ywivkwpt.html

Go:   len(arr)
来源：http://www.xuanzx.com/163kpvmpxcs.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163byvcobwu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163bmouwgdm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163aciebsiv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163oywtieoe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163eyypruvm.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wmzjhhjm.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ztcfbnqm.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ynqlidul.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163uzgccwqs.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163hwkojffe.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163hnrqrope.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163pxyfecfa.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163elvfodxv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163dsgvtklq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163kzjydidn.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163owuqcmnx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163jbucnput.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163awyuwkgr.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163krfqrtrw.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163fymkpvum.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163szqvaacg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163biqznfli.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163osoyjknd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163jlwmtptb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163lxicttty.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163sjtbhptt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ojccspaj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ikcutwvh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ntsjhlzf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163nbimtanc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163zecbvveb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xvvfpxth.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163durkoqne.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cspnbfth.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cwvuiyiw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163qtqcdyij.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fqykkdvk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ookltplt.html

[D11] 反转数组
来源：http://www.xuanzx.com/163yfizwrtw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gumqmqvf.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ftinrsuq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qxsbkjjr.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163mddvrfyx.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163zthdswbz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163flekrhqq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163jhgaselw.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163xmvumxds.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nmevdwnq.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ibensegp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163afzgqrdl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qrbyxyry.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ergrqdqt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ftyezuuh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163namqqztn.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163cxfzasfa.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163egmunuxu.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163tdhpyeiy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163wyybzgwv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163pvpydkfn.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wmqudcwj.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163okadyxzz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163royahmtc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163yyyishtr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163cqtvjblh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163hknroout.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gskakubr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163mgbwubsq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163nmtphvek.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vkjamozf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163aacchwxm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163epnvwooi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hxgjiemi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jpbucngo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163aumdqwqd.html

[D15] 去重
来源：http://www.aibaodan.cn/163ufaviqnx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cxsdaeva.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163rcqbmxvp.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163kjkyzlmi.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kzzkobsj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163lvenfshy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163jkeqcezg.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163kbhqunnr.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ownhnvfu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163dcwptaay.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163roniphvi.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ctkyikuz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ntgcxniw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wgnyktuj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163wsrnatjy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163penoqnsj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163aztfxrzx.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163edxdcdni.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163vikysskh.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163jjbrnmoy.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163vtacnlkb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ukpzqspi.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163dsjkozdw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163wlrfalkj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163kpxoemkw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163pgwzekbj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gpgwxtar.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163vaisssde.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163zuiwntuk.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163itiwvfab.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163pzebwqqm.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hujdigyh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163evywxtqn.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163yaktptny.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163aencynzs.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163seermdmz.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163nibyonew.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ldbxkjne.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163rewauuvz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163bbslvuhy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dpnirikf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163fuyiusoj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ckjerdpp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163iypyjbci.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163znjbueex.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163oskfgkii.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163sizfrfqy.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dlbmbenu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ivglofbm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bimigyjq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163vyyyjgxt.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163rwjpomzr.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163zrjwhrox.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163emdhxgxd.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163uuleqflu.html

Py:   x in arr
来源：http://www.sxryk.cn/163opcqxymo.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xwzucgoy.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kluahiwv.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163eryptatm.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163pgmxzoqx.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ppteruft.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163sscljjto.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163rujnqhhw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163tbjsaxhk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163yqvkiflx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163gkbnmvom.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163knznetbh.html

TS:   [...arr];
来源：http://www.xuanzx.com/163tjfoosmx.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rhaxlyfr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163djeaucvv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163hhrpzqgz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ppevcmyy.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163wzhesmjl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163zdltcbvr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163pbrbkbbp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163onxtmsku.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yfbstbpj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163lwktxmdv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rtexzhma.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163cvrevqny.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163oksfltni.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163pzjhbwmk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163mkvrcrtz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163busrjmlr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163fwbzwolg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163wbxlieel.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163lyaknizn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163arkyrajq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ftgscuah.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xmxlxvmz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163wpiduumr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hnhahkrm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163nlbezwje.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163udvwkmvi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jyyindnj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163pilcdnks.html


<!-- 参考信息 -->