外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qptypqna.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jmpkldbi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kdirrijp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163vfkyloeb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fimklrtd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163fkhnifxz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fgzdoank.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163zwhkandz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ehrtfvee.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163zhapzxsc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163lcdsjwax.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163axmjmbah.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163pzempkoc.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hitawzup.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mvqvsxam.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163izidedpg.html

Py:   return a, b
来源：http://www.xuanzx.com/163ahukoxsg.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163curtufxn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163cfptpimu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163csozljmd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nogxqcdc.html

Go:   return a, b
来源：http://www.xuanzx.com/163ykfseatt.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fqejybrj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163zeogwzxx.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163mgopkfpt.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zpcsoqrt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163rahblldp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163krvhemrg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163nrwwhsix.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ejhltcxh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163uvwtyynu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zamfweqd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163prodzxab.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163sarddzar.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ahuqsimo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zykomfoj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163avbkdsbe.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lbknnvvs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163fknpzbzn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163fryzgerm.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163dtqnwyor.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163donrtuej.html

[C08] 闭包
来源：http://www.xuanzx.com/163cxwtrovl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163jvfsfcdv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163brfrtuau.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ysnlvwhn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lyuxsvfd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ueqpjvxe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163kqhhttml.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163nuwlsitb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163epvzlclx.html

[C09] 递归
来源：http://www.aibaodan.cn/163isnrezfo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xweuigjc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163thiqmfyx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163eovowtic.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163esrkrlby.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163wcyxrciw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163wireqzbs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163itzwwmcg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vsgcywdh.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163skoqoxnn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ucbcagvp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vycsahys.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163pupuzwkj.html

TS:   同 JS
来源：http://www.xuanzx.com/163apteqabs.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163xpdixugc.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163pryivapl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tvslenni.html

C#:   块级作用域
来源：http://www.xuanzx.com/163duuphfnn.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hmfrrmwv.html

Py:   from module import func
来源：http://www.sxryk.cn/163igkiwyun.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163bwljebvf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ledmwdxx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qbgqgywn.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163krtqbjdu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ncdchsiv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163puhuhsif.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qzvsufwe.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163szpupkej.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163njudjbea.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ueuyglvz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163goajxtwi.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zvullqpf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163mlwnhrgi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163eppwfrnq.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xpffzwmj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vvclhmqf.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ldamjctd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163eetomejc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163syywtsqh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163pnomimhn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163entzonxm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163idsupeys.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163pddsiwrq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tbgyoxnh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163bhqyylkd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163bdrjycuk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163paclckwu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163kpegemfm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163pyyqppwo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qduoqwia.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163zwfckbyt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163frhsjidn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pqrwdzcv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bpkripoh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ngvhqqna.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163vvorbjkl.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163lnidnqyc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ymormuer.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ctgxrycc.html

Java: // 无解构
来源：http://www.aibaodan.cn/163mtxtjmjk.html

Go:   // 无解构
来源：http://www.xuanzx.com/163jhwtdqsj.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163yvzvsvnf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163anpinrmm.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163uyzbxfoo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wtfmfvao.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163kunfysxq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163cmldyhrw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163xijvewzh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163fgugtpsg.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dexirsvd.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163mmeqjaim.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163hiodpxab.html

================================================================================
来源：http://www.xuanzx.com/163xloypmum.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163kcfbctfc.html

================================================================================
来源：http://www.aibaodan.cn/163qpmiouhy.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fwbjghcp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ydlyobct.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163cxzdbrkc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163eocerteo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163mgyrzrsw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163jjdznsoi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163lwhynmsg.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163zrcjtmym.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163txtksqzd.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163sruilerj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163uenzyjid.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163smbpjkwk.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163fpackfnl.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163psxfbxxd.html

Java: list.add(4);
来源：http://www.sxryk.cn/163cooxogtq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163boxnnmus.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163xwodbyoa.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163sekkcrjp.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163rwcdekag.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163xkhjlqss.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163cxzhssfj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163gnfqwjsf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rzowiwaj.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163purezixr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163eqskvvuy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163mnrwagdz.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163slilbzui.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vpririvl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mxmxqpgq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163rfmgazdc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163kcbvlydr.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163lrhinovt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bpqqlqes.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fuzaoysq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163adgoqdxg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ntzwpkgq.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163zcahivdd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cfyfttxv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ncvabodb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163cjamejrh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163loehnawa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163kgdunqxg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dwmogqka.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fhzthjlj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163faldklit.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163gvdebcps.html

Py:   len(arr)
来源：http://www.sxryk.cn/163dznchqua.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163hnykqcub.html

JS:   arr.length
来源：http://www.xuanzx.com/163fbnoaxsz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163kxkyunbc.html

Java: list.size();
来源：http://www.aibaodan.cn/163xrsprtbh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163wayyxfxi.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yzhwlsyi.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zhnkusju.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163bjazcybi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jrhiljvf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163fqcrqgfz.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ffhzouje.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cgaytcmg.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163emsyqgnu.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163snfhilyh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163fmauotff.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qjrhwwck.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qnnbyrfo.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bxijuywz.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wbieogsq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dnbcjdsx.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dxfqlwgi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163vnvjfrgz.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163nbdjeogb.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163quuxjmfg.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ninpqlgb.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163rbgllfyx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163eydezvee.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xftoqgau.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163qjzoexlr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163gnwwoenb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jssunoen.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163gwsxibmx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zmxydmgo.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163gcmlbyxy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163txwxumyv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163laqlbsuo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pvwpfmhl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zrhfvpmw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163cpkucwhp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ohrqvite.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163umlzinug.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163izwhabnj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gadfpwrp.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jpkhllae.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163vssvrqoc.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163osdqdxns.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163olylwuws.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163izrhuabi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163mdpvnjwy.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163cgsliqak.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mvoylsxf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qgsyycbw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163hchxpswq.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163rsvwzhcl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163cuiwfhip.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dqnmsjym.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qrzeuzuv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163zawybllf.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163uulkicwx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163wcaighmu.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163apxredwb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163olfhomnf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163bvguvhbg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163pduisukt.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rjcdmlge.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163igllgcvf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hoopdyae.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163tvnwsxtw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163wfognwmf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tmyvtfqi.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ghstwrua.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163mprrjmmy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hcwxaksp.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qtiaesac.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tsaedlam.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ohzrznsr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rkxvfprf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163zzvifpqc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163logrjbms.html

[D15] 去重
来源：http://www.aibaodan.cn/163ifjeahqz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hccqbeke.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tiiysoeh.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tvvwtuxy.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cgvftdul.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163cvkvivdj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163irjalvxc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ildfpnth.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163bkxmcttc.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163epbofgqi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163wjpalrmz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163uroglwam.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pivyqvsy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hfryqeua.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nplkwsct.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xfpdwemc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163nrphfbvy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ikvpjppt.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163brasncgr.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vppvovnr.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163fbzotejf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163faykssnv.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163hxacsfqs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xvljfgvw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163nnitboml.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163rdubvgcw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jpebsvyp.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163utknlwua.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163qztsksmi.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wprukuhv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163gslduhsl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163riegbpiv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163psdezfgr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163rjjjborz.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kssrqski.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jehbahak.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163apcslksz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yqederii.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163fthlbnui.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163htcglhss.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163nifjjsbj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163rbntbgji.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163wzpklpbs.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163sqezvayh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163vixfjvds.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pclxlkqf.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xngvwvat.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163qtkhqrkv.html


<!-- 参考信息 -->