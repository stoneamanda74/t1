外链999!wailian999！

Go:   a && b || !c
来源：http://www.sxryk.cn/163magmesrr.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163lhbppmfg.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163lhzzvnuh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lurngbea.html

Py:   if not data: return
来源：http://www.sxryk.cn/163rfpopgsb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163kjiprfjl.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ewqjspqz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xfxhnhgu.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ykcirxon.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163fwbowjyk.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163glhkcjzx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bcfkprdw.html

================================================================================
来源：http://www.xuanzx.com/163nunwezqu.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ysnwlszq.html

================================================================================
来源：http://www.sxryk.cn/163bndzwoex.html

[C01] 定义函数
来源：http://www.sxryk.cn/163bfthzzeg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163gpbqohic.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dlxiynve.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ikvuhfag.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ednfyfgm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bzdbhojy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163nlwpdxgf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163eszsmfcg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bbrvscuv.html

[C02] 默认参数
来源：http://www.xuanzx.com/163pyrmfigr.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163yectvdvt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xdrrofuc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163odwixexq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163lydbnace.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zejkedtc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163zdwhyvea.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ezvkuikf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163axcauzhu.html

[C03] 可变参数
来源：http://www.sxryk.cn/163osclipcn.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vaoigodt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163mgblhoqh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dvradokz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zirjauqz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163lfbeqwmi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163aijwkmna.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163kaubnhai.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163zzuloecn.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vjjnqtfb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163szmsuytg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163iuowlhby.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xqcvvugs.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rjktiyyg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163doxtwydt.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163sjqgxxqw.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fpypuuqp.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tstgwyda.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163eigbakfp.html

Py:   return a, b
来源：http://www.aibaodan.cn/163naztrtmw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163wrdixayg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ittfesuj.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lhqegoco.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163torzxugp.html

Go:   return a, b
来源：http://www.xuanzx.com/163iiimkszs.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kspzltcb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lpeidjgu.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163bbnaszgj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163jcijtzpm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163rrwzdqhy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ydfkmymu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163cojzujfw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ropvkpvj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dwrekelx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163kewkytku.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ercwmkga.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rzslcbmo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163dyzfhcnw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ddksuhst.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bixjzexl.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mfzvzuoj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xxkxcusn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ekbdjjgm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163iqdnjdko.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163uqtfrxmd.html

[C08] 闭包
来源：http://www.xuanzx.com/163jwuzappa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163njbgcztg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163cjylsvin.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xztsccgx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163yjcqhurw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163dtmdezwr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163jhmrxwsx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163awepyauq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xkpybnzc.html

[C09] 递归
来源：http://www.sxryk.cn/163akbhtohd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163onoyyoaj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163llfxexqz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dtepacqs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dmjsjfxp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zjpnujnj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ywdkvcsi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163moquaidg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163lenoillb.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163iwalpayk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163hjxgaksi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163kbqlrrml.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163uonfsezj.html

TS:   同 JS
来源：http://www.xuanzx.com/163oioyxluf.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163pxlbzhnf.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163lcexpsbl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163jwkwnrgn.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163xmtsmxds.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ximgiqfe.html

Py:   from module import func
来源：http://www.xuanzx.com/163hcmrendj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163dgaaatyl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163masrbydc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163tajrwebv.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jzmymuzn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163npaaknig.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hnlunfqp.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163cwyivsgl.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wfihssxe.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163axggkriv.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163gbqshzwg.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kmccfodl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ogogprrp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163hsjfjdxx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163psagxyrl.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163gzxgznmb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163reumwpfd.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163yhxrjagb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hkxvluwa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vxkdtjut.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163enoduobg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dqeoebgz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yzhnquti.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163cmqpsusw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163saflejtv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163pbssyurj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163rfpjexyn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gcjrhfan.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ztcfiumr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163dcvhapub.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163zmaqzksx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163oogyjzkd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163fszngdcj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bapdnsxp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163rdeufdxv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163rhoqiyis.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163agbcpzne.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163wlcgxeyq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bwmwuxwx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rwljjqfe.html

Java: // 无解构
来源：http://www.xuanzx.com/163ezgzxczz.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163chkwjyko.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163djrwymvp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163xxxwvbdd.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163zujerhsv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wrultoqa.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163fbvtlexy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163qmflkvpx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163haolzyde.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163uzfskear.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163xwgolfhp.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163rphrystv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ctraejad.html

================================================================================
来源：http://www.xuanzx.com/163zkvipznn.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163yzqqrloa.html

================================================================================
来源：http://www.sxryk.cn/163gxzwdyov.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ejsptnus.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163mnyyzfwc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163rwndatst.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vaepzgsj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gekeeqhq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163muyhafbw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163rporttxu.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163evjwjtjf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163tuiavwjt.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qfsqpnwk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ygtdfkod.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xptuyiiq.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ylmizbte.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163rvbnpmnc.html

Java: list.add(4);
来源：http://www.xuanzx.com/163epvsluno.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163fxuiwlhu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163snikbknq.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cxtopolw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163uvvwuhux.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163yfhknpxo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163otlzuwtq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163akhhjlvd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163pspuwvhs.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163qqiaykts.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163airvdipa.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hmrutqjl.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163psqjtknd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163kxgwbeuf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163bbvgpjsh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jxuicdkv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163sbdafeok.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163oepsmkvi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163rkkrmsbi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163arjyipvf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163nltouwdh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163dqbktapb.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tvybxnku.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cftdkacg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163psxcdnox.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ghpunhne.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rxgiybay.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163usmcdbgy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163yialwqbn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hbdwdfgc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wxcmoziy.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tagxiesb.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ncfwhyqi.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163yvupuuca.html

JS:   arr.length
来源：http://www.aibaodan.cn/163izzoqapp.html

TS:   arr.length
来源：http://www.aibaodan.cn/163hlcdelsl.html

Java: list.size();
来源：http://www.aibaodan.cn/163vdbtfmwy.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vpvehzsa.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163xuczohdk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163dvjjmsyr.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163usimcnyb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163hjazcknw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mgtvcyri.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zsnbscnq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gafgeyen.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163tgnqurxb.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hfmogtpw.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163pemdjdmp.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163eauiqstx.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163fqucsiev.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163jmmptroi.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163qmhbobvm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lnpmobvq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ozrmrufk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163okdjphui.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ayanpkee.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163cbodjusf.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163lbopglda.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163paglxkvc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lrclrslb.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163dyxynsgl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163frcvnpfi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163xmdqolkb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wokofmbj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163rvzilsao.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163unijqdvc.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ixnadrlb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163eqsmvkgz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163fsyhlxyw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gepsyqdo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163tdiwjdmc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ouxavvdt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163gztcorhf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163gpvslhta.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163kyklpvtx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163zhmhbnxk.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ewwrbnbd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163peixcxes.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wwlfwbjn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jbveilxg.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bjrvtiqz.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rnjgeacl.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ibyhkdvo.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163lwvfiugn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163hpiqkgat.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163iaivxtpk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ujpqesph.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163xinngszf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xcxulhjn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fmcywhas.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163yrpboutg.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163jpatigvh.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ggromydb.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ylqtjmrc.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hiumfhzb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163rlmzgwwt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163bnumzkym.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163uujxpnjo.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163njkeewbz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xkvtslfm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ygomliqp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lqqohxod.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163gjjzjfdm.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vzvmapvt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wjjftdhd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163mabtagjn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ivlsiexc.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dhhucdoo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163dfofukje.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ylvunuxd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ausdbkiy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tcxjgzxn.html

[D15] 去重
来源：http://www.xuanzx.com/163iwsydqdx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163grihjfiw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163oswfcuic.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mscpbmkb.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wpdlilig.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163wbcjcasr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163optlymgv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163cunulxlc.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163wrncknyc.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163fyedbght.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163uelselhp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qjuuktvt.html


<!-- 参考信息 -->