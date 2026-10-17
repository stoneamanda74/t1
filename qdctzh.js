外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jydzkxmn.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163axspvsux.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wacgayze.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zcbsnajx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163txptswwv.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163alxhkxfy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163euiucoac.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163scnozstn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nudbszzu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163plwezkxn.html

[C08] 闭包
来源：http://www.aibaodan.cn/163eihmsksh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rtahidvp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163wrwrhdyo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rjnxizfo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cnedfxjc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163usynxzcj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163gmesblhc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vakqsami.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xfkgdbzn.html

[C09] 递归
来源：http://www.xuanzx.com/163byqhvhzh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163suttmgkv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163mxjzfrvu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dpinteut.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yrjgkkto.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ytdkkrla.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163gxjadorq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163wtkwinvv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nvukqydj.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163hinathki.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163eaasqrvn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163yejtqxlz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163yeraxtjr.html

TS:   同 JS
来源：http://www.sxryk.cn/163lbbwfeeh.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163riybryud.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163snsklbwz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ytiykxkm.html

C#:   块级作用域
来源：http://www.xuanzx.com/163bekuekvj.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qtdbcvdt.html

Py:   from module import func
来源：http://www.sxryk.cn/163ppjpnola.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zxgggiba.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qfyjffdl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rctveqnh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163kcrvktil.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163lrzzlbry.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163poroavmd.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ujdlzfhr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163yljpszaz.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ffwinwbd.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163mownbqxp.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163wwqmuhhh.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nzndoyrz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lhpkcfuv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vlwxklgz.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163zoeiyccs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163xsyqrylk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hsbkdqtp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jdimhlty.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163srchtvdp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163tvjblcom.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cmnoiyer.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zsyugzwo.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xsycvfkr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163sqrfkfev.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dmgnyndd.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163azkdwqsu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163oufthzra.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ymvakjau.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163rdvgauxw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163lgkkpzba.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jfnnnfkh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163zdeglcwz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qqzyjyhi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lrpzhsqa.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163kcqswuwm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163shajlzjt.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163migadskx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hzbjfoye.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ulawwmkh.html

Java: // 无解构
来源：http://www.aibaodan.cn/163wxoclubg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ursmbibr.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163phsosejy.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163esxheipw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ppoikpkr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163sihofvdd.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163wisjgnse.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163mrqoilba.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ptlwzwco.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163hpjyrcdb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163plykhqyr.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163jxowvagl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qexznzik.html

================================================================================
来源：http://www.aibaodan.cn/163fgtorbgn.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163vlhfleal.html

================================================================================
来源：http://www.aibaodan.cn/163pnoffdgs.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163llivodrt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163oyhgpouk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163zeggzxdq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xdyadije.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ngtigcwu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dmqvymhi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ekuejgow.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163duaeybnu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bbgijtcd.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163mrsamrxe.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mspufoht.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ekghgyud.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163bkibqcum.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163hghavqxa.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xgjaqlaa.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163jdnldjdz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163kmmsmigc.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163mozzluzl.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163sgmotudt.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vqvlonbv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163inkkexib.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163djmaadnp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163wfznaecu.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163eeglnlwl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163lmbqlmxg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163zjjcppfx.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kleztcco.html

[D04] 删除元素
来源：http://www.xuanzx.com/163slvckmcd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rlwmbwum.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163kjpmcakj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163emuaycsy.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kqpnsjsj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163kcwcltmk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163opdoscyk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ajazuqod.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163axpbbmae.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163yapjdfnb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lnwysall.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163fjduogrv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163slaccyfl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163xrzdndkg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163kghiltif.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ytrfnyai.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jwhnzcmn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163tdnkizwt.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163drmiiypl.html

Py:   len(arr)
来源：http://www.sxryk.cn/163jclxfxfm.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163knhzxqam.html

JS:   arr.length
来源：http://www.aibaodan.cn/163narvilic.html

TS:   arr.length
来源：http://www.sxryk.cn/163vhqeqhxf.html

Java: list.size();
来源：http://www.xuanzx.com/163bkixctfl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163uvrmlunh.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rfnpcsog.html

C#:   list.Count;
来源：http://www.sxryk.cn/163eypjfyvc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163cvccifzm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163adipzpln.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163kaqrxzvg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163psawqapt.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dptfrhve.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163uribtgwm.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163viglrfud.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163tganuzwk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163sorbxsij.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163fgkdivir.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163uyjbtxbl.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163yllejdnk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163npntfnse.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163tjmqilhv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163doypjgfd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163trpuaglc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163duxljwcq.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163hbpqpcdu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163akveujnf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163evafstgo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163dflazmeo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wyznvmmt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163yvutftwr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vflmlhnl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163bdevmhro.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kfrhbijh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163cgmcqdfe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163tlqlnndt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163eqkgdsvo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wigjiezk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kqselhlf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rqaonyvq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163wpkpmyxa.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163zrfwhsbo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rpanpcxz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ygdurxae.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ablkvtht.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163dhaxzvhq.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jxhdlrpv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163xxxdoxin.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vgnpgjga.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rhbjsczm.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163cqvckmei.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163qcxgkfjs.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163mkwjifil.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vmvattpa.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163cqwgkldz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163llfkrwvc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cvleppwe.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xhudfpdy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163xshjckft.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163tmsxhsdc.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163qpssmmey.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163jgthjdhg.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ouqokygx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ewsmkkko.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vshjmvpo.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163quhooceh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163luzimfob.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vugghnif.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xvlznvol.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163bsimuyqd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163lnjdttyl.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163drykuxbg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ildpoanl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163djiffrbk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jvvaivto.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mfxxleak.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ghpeapkr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vaamiocq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163jiodubyw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163bjkcxauo.html

[D15] 去重
来源：http://www.aibaodan.cn/163ygqqhlxd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rlhmfdcg.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163fpelowkz.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xvxggkwg.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bibudaik.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fyznvaxt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163seikjxxi.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163lbdqpvim.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163pjdwebfh.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lomxzkfm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mlmqochz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163kyybpsgr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ysjlhdvn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bzzwusjj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163jkcaubxi.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163xbaiemxw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lxfmhpov.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ennytkvu.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ihbysobh.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163yoqotmrw.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qwmgyxlq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163lzolhbzm.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163llwufccc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ggrfnavb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163kfgvsbvt.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163oipbgzrz.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163veisueyk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163dnwhgchp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163mwkammmk.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163uogmdiwp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mmemzmba.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163zydbsrop.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163cbxmdwhk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163wadgpgvw.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163oyvagkue.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rihsedms.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ymtfuacd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hfutjzrq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rsdlvrkq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163pmshqsgp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hyytlrtr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rjdwnwef.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163eygavkzf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hfoqctqe.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163zkbihfug.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ezfhwsfa.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163qoiurhgy.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vedudxgy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ugaxgfto.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fzblqiqd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163vkcmsjsa.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163qejyecne.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mjwcfnaz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163yltpgggr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163sggdhgwf.html

Py:   x in arr
来源：http://www.aibaodan.cn/163mrndeloe.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163zgrynwvj.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dssloohz.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163kjxunvbc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163emcbvdkx.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163odgjivlp.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163istwavgw.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qjwzyeyr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163vbflgbwr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163kjdbrevs.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bsnbzbtq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163dfctentb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qpfmidon.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ouinrjrw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163lflhyvfd.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163vqcjwlgz.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ukoeomvk.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bisynrhd.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163fmjyoyed.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ogayyefc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ufrwbwfv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gaajbyfw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163shoygexh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ldqxeidt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163amvxxazi.html


<!-- 参考信息 -->