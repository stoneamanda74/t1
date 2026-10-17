外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163iemyzbjf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163mphleehe.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163cwuxrxpn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ibkziapn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163seribaed.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163tagunmzr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ttzabotc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163iidihgcm.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163pzgntowj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163vcllfrku.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163hzmyuzya.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xhiksope.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163mfgjfuqa.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163iezomwmc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163embtogzs.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163yacnwlhm.html

================================================================================
来源：http://www.aibaodan.cn/163wzhtcxvs.html

C. 函数与作用域
来源：http://www.sxryk.cn/163llysvirl.html

================================================================================
来源：http://www.aibaodan.cn/163iczmclby.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dljvhhxl.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163uhhvdydc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163baxuiclf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163cidwlcgm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163urygyvbw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vrrchpxd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163slmmxfxr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163jjognfva.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kirgzxof.html

[C02] 默认参数
来源：http://www.xuanzx.com/163suduwrdm.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163zspwxbfe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163gcgmstij.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163tnrjfquf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ikpszijm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ridprrsw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163lzrtevgy.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163oahvypcb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163vthnucpz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163etafbdvh.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qegonjuv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kastcxkp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rmwobmhu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cnryclav.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163fqzrfnbp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163nutcruve.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163qsyvytkh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163bjmsflmw.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163lgoeoeqn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163vsdtladv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163xqirtjuh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163evqybqem.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bjprrgak.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163buikbnkf.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163glnzliwg.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jchdwgbh.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nhdrqxje.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ebvwhlld.html

Py:   return a, b
来源：http://www.aibaodan.cn/163rfgmsvlg.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163frfvywns.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ftycxkmo.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163xdvatmxr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163efnjdvkq.html

Go:   return a, b
来源：http://www.sxryk.cn/163npvzyqoe.html

Ruby: return a, b
来源：http://www.sxryk.cn/163owurhgiz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163nmtqqlhi.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ghnnrybu.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163kvbdzngv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163fmvbqpzj.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163bjmmfhtv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163cjiprqww.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ctwcadod.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163nbxuuisk.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163pzkslmwq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163yprsgxgz.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163pgjmccam.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163qxowipkk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qoarmobv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163pmwhmyjd.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hpojtojm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163cdjoyiml.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163cwfzryqq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163evuzzegm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rfimyqpy.html

[C08] 闭包
来源：http://www.sxryk.cn/163gxmxmtdg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163daurqpte.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163yrbmdewc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ksxdtltf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uonlouma.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fadvdqft.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163farvbuyn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163sekygltv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nzeutseg.html

[C09] 递归
来源：http://www.aibaodan.cn/163lvzijmpg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163bqqzztck.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163aelpublz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ilnvqrvu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uczgmcac.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163piqnblqk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163haazdhaa.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163vkeykdhj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163auspebvl.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163nszbbxpu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163boptecxg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163updtlxee.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163gpzbixly.html

TS:   同 JS
来源：http://www.aibaodan.cn/163edskedye.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163oqovvwgb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qgvzupkb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163wbeayuuh.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vzgmkqjo.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ttvwwdnw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163mrndflzw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ztiviiua.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ovamwdfb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163txlyecvw.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163gbfybxno.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163hlwukhsk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163gruygemu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163dvfkrqeh.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ambuznwc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163mixxrjai.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ypnvmdix.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163eoervzbv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163plvrqzwp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xxmnwlxq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163cyjqnyyv.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dioinxhq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163iynpdyid.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163uszcgjlr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163sosftwec.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mgqythbx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gaoiljzf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hponixga.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hwxuwctn.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ryvkmctq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ftmqfvhq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163femuajnt.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163spgwkvig.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ywhgxajn.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163agtgyliv.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ysoostak.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163akziwhsm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163slgsihxa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163kgvubczk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163nnozghom.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163njtlgaux.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mjpysvdd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163kxmcbfzm.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163sjpcmufu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ykpzwppa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ghpbkqbj.html

Java: // 无解构
来源：http://www.xuanzx.com/163nrocwdvk.html

Go:   // 无解构
来源：http://www.xuanzx.com/163oahctyav.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163cmvtogfp.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ikmbxqtz.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hvnnjfxl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163lxtzbfnr.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163dyflmlzk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ywozzfwb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ypjrfzqi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ynxugquh.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ttrsemve.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tgiohzoj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163dxmwbmph.html

================================================================================
来源：http://www.xuanzx.com/163bpvczrqm.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163khkinwfm.html

================================================================================
来源：http://www.xuanzx.com/163zucdptwv.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zpqwbdpq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163anzhuouf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163jjmcpnml.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163bnppbkwb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163bdgnkbaa.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fnunjaxt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ppaztnjf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163qrjbvdzh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163qgzavorz.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163bqcssybd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163fgaetbxh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163cmlgrrit.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163bqgvnhnq.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163bgglitwl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163yoxmnhii.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163wachmwrv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163vwwjjamn.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163quqtzncs.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163hzqgiejf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163qarbwfjw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163tdxngzle.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163usaybaua.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163hmdwqmdk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tcawrrjo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163behrcirz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163yslwpylt.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163bfihtysx.html

[D04] 删除元素
来源：http://www.xuanzx.com/163hgkdibtw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163qrelwomi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163faewbrbk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163acepvemz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dlbcdnef.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163roypbshj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163uapaygug.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163szwtoifo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163cyjrlvsu.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163egrzdefg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hwxzihfc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163kavjtijl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163xwkinpqu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163eedtmzgn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ncfzrxui.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163mcyouqgq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bdjinzcz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ulrgkrxi.html

[D06] 数组长度
来源：http://www.xuanzx.com/163rbrnuefo.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xieeifyp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qhdnzmuf.html

JS:   arr.length
来源：http://www.sxryk.cn/163eorcjura.html

TS:   arr.length
来源：http://www.sxryk.cn/163axclundl.html

Java: list.size();
来源：http://www.aibaodan.cn/163fccdkrah.html

Go:   len(arr)
来源：http://www.xuanzx.com/163rbotssye.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kfrhuoah.html

C#:   list.Count;
来源：http://www.sxryk.cn/163jvtvnjha.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163qtuqymcq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163yozazuap.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ikhuxect.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163oovjaktq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uxxtdutw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163khimjboh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qgkqfnxh.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vqleckgx.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163bsomqfjs.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163tqrdqzem.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163klhgiorm.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163edurmaip.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ltxxgjxx.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163vleboocl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163lmfepfoh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163bhherzwn.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163gjttqpga.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163yfgqzpey.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163zmxjvxyf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jndsoumq.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mqiuhtmp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xlajixnj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163coplaebe.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163baaouejd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wlsizjdr.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163eabqedfu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xanpldee.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163akbnqnaa.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163mlllxtpj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lcuqhdaf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163furuieyy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xnivmuef.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ewdexgea.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qkawjxnn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163qavczuaw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163tvzzjywb.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163khavyuch.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kdhgaaau.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163gubenmzj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163llplsjyj.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ydpcwhkw.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163brdhoxzo.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xonajmaj.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bzgjbtms.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qakwsvos.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163mxtutfml.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163jofvqxwz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163plduqbkj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163iergbkix.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rmrkjbny.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163eifuocby.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zhytlyzn.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163fiawdrxt.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163amfxpepu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163rqdghgmk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163odlvoqjk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163hniwhlfn.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mbckliqx.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ivwhnmin.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163trcjwhtn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ptgupfuf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163edskpawk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163veckujgo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vdnteqbk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163pyxfkmbb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163kkadcvjj.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ahiuylrc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zbcsudoj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rxidyjlm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zdhbesdd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163mcckntoi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vongjvdp.html

[D15] 去重
来源：http://www.xuanzx.com/163szhvpyfn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nkxrlnhx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163xtgevfgd.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163piinsuyd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163hzcypdif.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163wjrocqvn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hopcvier.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vlizgork.html


<!-- 参考信息 -->