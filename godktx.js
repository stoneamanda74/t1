外链999!wailian999！

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163rkkxkpnz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163nuijtizj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163pdqtxjig.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163wahjvfra.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nwdepqlz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163otbdlojb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zwmwgveu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gnyglumw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163iqucwyru.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163dqhjhlkb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163azaznipm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wzerabbo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163pjqpswnr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163souyypdz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163sfziqwsr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tfunjhof.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163iaxyndur.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163afjibexp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fotdsjsc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163zzqxggvo.html

Py:   return a, b
来源：http://www.sxryk.cn/163lhhwulyf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163uldopqnc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ohjoqwab.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163rvbqibub.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zlfqvwyp.html

Go:   return a, b
来源：http://www.xuanzx.com/163wbxaqdfi.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bkhkymab.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163mznencid.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163mqwygqir.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163mmiutqsj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163efimsozl.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ffvohuhb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xilmdata.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xpxpvqfx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163lzqjgpki.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xbxejcdc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lzufkqgi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163tgligbzc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wbpcpnie.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163lotsqjzt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163gjeccgjf.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rqkfbcgk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163sctnmlat.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163cpblzbqo.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163lrnnfiaw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qwdgskzd.html

[C08] 闭包
来源：http://www.aibaodan.cn/163xzuudwbt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163usjujiyh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163qxosbcyy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163yujmvyco.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ikxtpgso.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yzizpdzl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ohjzdvth.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163mhujrbwr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nkklierq.html

[C09] 递归
来源：http://www.sxryk.cn/163hjvvypzw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qvbeqygn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163zcoxovwg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163kvnamacr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cthniime.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163lucuwrmg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163yegqcqxk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ofxupntm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163hajqohwn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qcszjfgu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gjyyblkk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163qyfmuqdg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mjrwozci.html

TS:   同 JS
来源：http://www.sxryk.cn/163pjcfpooc.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163figrtvcw.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163zywfxhev.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zrfpqhnn.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wegukepr.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gphmohuo.html

Py:   from module import func
来源：http://www.xuanzx.com/163zidtwuvv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ogbkqlcd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ieoetffo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163nprltiwb.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163pioajljn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163hitclvei.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163magnjwww.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163fwcnmwpi.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163yabsmuvp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vliqfapu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163jwqiwqij.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163emgdugqx.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zojyffvb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163eenlomaa.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ypujzfcj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163avpbveeq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ltrjwfbk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ejglklkl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163xgtdkbxc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lcpnilly.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163siqkytmb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yjjbwmgx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ichstdqm.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163bqocqkig.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jekgzelp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163jxfzaqmz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dedrivvk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163lkoeuymu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mxislhyb.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163dmkoyqsy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ypplocnb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163uohwqzyo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163iciiyrkd.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163khzzwlvk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163colclcof.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zfwwzuoh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163scujktsz.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163dyttakfh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xznzxcnq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qudpukbt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163amkprfvn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163gyvtbqdh.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163hsfejarf.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163utamnjze.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xdkuqnhw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ypmhmqle.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163mmlajvek.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163podwivsc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163etlbrwcs.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wybcibis.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163gkgvnosj.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163payvbqnp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163byproavr.html

================================================================================
来源：http://www.aibaodan.cn/163uxtzchpe.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ryuzktwv.html

================================================================================
来源：http://www.aibaodan.cn/163xnuwcvqy.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163bdzvvcaz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163dwrlsoft.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163fhfyidfb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tdwdqjnr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gmteohzt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163jdxtfprz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163qreopwfs.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mfgfrwsf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163hiqpkztr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163uildhpyz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163kqckmznt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163jdqxjmxq.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163txdpkjrz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zgokvzfd.html

Java: list.add(4);
来源：http://www.sxryk.cn/163bmxakcgo.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163msifzxbz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mzduwgfl.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gnygvxqa.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163vryazqjj.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163rjamzngd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163hszgvcsw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163siisxukv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163vfjrmnwa.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yfjlbqpc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163mmuovxqh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163zbuqzkrs.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vvztbesv.html

[D04] 删除元素
来源：http://www.sxryk.cn/163agiagekv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vamhodfm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vvfmbwrl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163amnfdxsq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163euhmxjzk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163itktkwar.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qrlnxsml.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163zxgbsoie.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163wjrgbrno.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163crcofwuu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nhklcalx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mfgitgiz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163hxlczaji.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vdjkpzpb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163kvxymsfz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fnsxnido.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vsbylrct.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ronhxiyk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163patqxevy.html

Py:   len(arr)
来源：http://www.sxryk.cn/163xhcbfjey.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163mrfxagql.html

JS:   arr.length
来源：http://www.xuanzx.com/163dgbynrbq.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fpauvrts.html

Java: list.size();
来源：http://www.sxryk.cn/163ivvtxzym.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lbvdcwoc.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163aifemrbq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163kuoionub.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ifsuiriz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163vbbfseom.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ojcknyak.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mebuojqw.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ejgixjnb.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163awnleuga.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163exqtfqbd.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163epkhhrpu.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163deselpug.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163pbfbcmff.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163hfcgiolg.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jmxpdxgk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ktufmaqo.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163rmnliquj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163aqlgcbww.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163fbelmhhv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mynfnihd.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163qvmgexai.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163jkuvsvyv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nrgzfiej.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163zoejnbxf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lwapkjmi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163detffvrd.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vjdrpwpc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dzfjzere.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fcfgaogp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163hiwamzrt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hfwozffa.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163eegcpedd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bbicbwec.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lbcfaukh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163adudmwhi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163bwaqnqje.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163hxexlgro.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163fpyvkdbn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163anouqfhq.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wzxyzmyc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163eclfisel.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163bvuqigdx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ynxqocyw.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163jayxohcj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163zsvcwfts.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163rfdoesan.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163kcfsjboc.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163sazkvtlc.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ddiasohq.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ushgpase.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163nsytashg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163idcdlazl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nrtfrtlr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wtpakxlf.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ikvwrayx.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163wdaaeaky.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163negthhvp.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vcyzondi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163qxnoneop.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163pjndtqqa.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jcjyyfzk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vfckqbkr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ahizyqtr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163wynwpins.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163cnmrinrb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163jphzjbhi.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ntwqletk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yzabbiyu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hnegtaxq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163exuxuylg.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163syskmvxr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163uwqdrzaf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xjxgkypj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ryondrpn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bwogorwt.html

[D15] 去重
来源：http://www.aibaodan.cn/163wkdhxjej.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gvwesdfo.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ktshwgfo.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fhippvko.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mqytwgat.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163cfqpkyga.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163kchemnds.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163cgbgbwdd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bncnwetm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163qwgidlsc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xeavfulu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163bzdorqlp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fifgoasm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ytmeikaj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cybjeped.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163syfgfunv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163jzhacock.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163jpjgqept.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ycwwilyl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vikxerhp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163kncihitz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wbkaluif.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ppewyety.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163enocwkne.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ukmjfvlh.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163oomvmtyl.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163cxodglhz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163iztahkch.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163zrogcomx.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fqiursoj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163rxmdehws.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163kgeibxff.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gbneqbfc.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ajbdlyhy.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163fdaiwmvp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163esulyppi.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163uzbmrtvz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163efdrntwn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rlqxpxnq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ytgsqoeo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vpcmbwvz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163adxonqyq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ikdyjydy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163fvazntux.html


<!-- 参考信息 -->