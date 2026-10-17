外链999!wailian999！

Java: if (data == null) return;
来源：http://www.sxryk.cn/163nvqdgqav.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163shmxbsoa.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163gcfaojgc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ntgahkpq.html

================================================================================
来源：http://www.xuanzx.com/163wudryziz.html

C. 函数与作用域
来源：http://www.sxryk.cn/163olfvgjlu.html

================================================================================
来源：http://www.sxryk.cn/163wwiswsho.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ljghpkum.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163uxntoukv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zpaexihh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163wrniegic.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rqqkjesl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bfwdslgg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163gzmzqttf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163sxzryscq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163engbnllw.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wegtlyya.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wozclztz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xjtodoyt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163tcykbasq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hqlvrhpl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163osapysvk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163upsmmeku.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dnlhyfhl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gnvwzxgk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163amrmbdxe.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wsfkjaxr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163azjegibw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163etjyzdqj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163falymuju.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kbmizoob.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163tetmgmlb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jjyjkeze.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xfzvzjsc.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163igzqjwtt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ttpyzosy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163caowxuza.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ngfmejud.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zjipryma.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163iiyztmry.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163jzkinetx.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163oniwwoyh.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ztyvqkeo.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lapmqoiz.html

Py:   return a, b
来源：http://www.sxryk.cn/163lgtxiyqj.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163yziiizic.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163edemxpzz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163edbzzuzn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163eqmzwcxx.html

Go:   return a, b
来源：http://www.xuanzx.com/163jncomvfe.html

Ruby: return a, b
来源：http://www.xuanzx.com/163qihtsegp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163naoeufzq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163tmcbjblq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ppgvssxf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163redijbse.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xyvckdwb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163reblpwtz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163urqzmzhe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163vvwozxic.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163egyflhwa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ouzyguvg.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163brjanjcx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163pwqaosoi.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163cmfoerie.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jumjtrkx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163tgodlzcs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163bkhenmwu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163nztfyuvc.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163tsnehkdk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xgsxzjxp.html

[C08] 闭包
来源：http://www.sxryk.cn/163jaioydoh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163potunfnu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163eqkwwrmr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vuigqdnt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hoassszr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163baahinbg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163dydkcjmk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163iezltvvm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163sbdpzgkl.html

[C09] 递归
来源：http://www.xuanzx.com/163zolrtxic.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163beyvwyjf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dlkepgbc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gnntkxgx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wqqicyhs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163vfndyjfi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163cohjhmzx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163arekwlui.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163hjuoodek.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163tcuqnxhf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163pweyjuoy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163sfviqgke.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163cwggzgku.html

TS:   同 JS
来源：http://www.sxryk.cn/163smvxwjwh.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163cpfbburl.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163lbnzkdmn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163cqmllkhl.html

C#:   块级作用域
来源：http://www.sxryk.cn/163byvzjmnf.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163lolhuhfr.html

Py:   from module import func
来源：http://www.xuanzx.com/163bxzhfurk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zgpisrvz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xpfhkjcz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163twlmujox.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163gozzhezl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163bejwdsyb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163aelualkv.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vzrjkvop.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163hfeqdntl.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163eqlspdze.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163vjxmzyad.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vojjkapl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163yzivyuqq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163uvpxhszw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163kxnejgcg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163vjiakphg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mafovqkc.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163kpjmnelx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163xfkbhnky.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163huezigel.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ydoxvzyq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bosjoelz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ygsrvobv.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163larsetfn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163oasaiivi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163mzyepray.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163awzonwsi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ihkispyl.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163cfgwyxbh.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163teoybsjq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163pknadidm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163yzdmbcku.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163afolyjze.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pwzuhuke.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qkndulqm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163zpqhaqoq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pujpxtmw.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163nnhpzxrd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bmdpiqxo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163rhkwacph.html

Java: // 无解构
来源：http://www.aibaodan.cn/163vtunlckn.html

Go:   // 无解构
来源：http://www.sxryk.cn/163rtqncorm.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vitqgwlq.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163aduczxwd.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ucfdjheu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163efjtuyfj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163lnvcbkgp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jqdchgdx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163pqlvsufn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163bhatkhsm.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163enwnpqxg.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zicfmreu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163nfrswfeg.html

================================================================================
来源：http://www.xuanzx.com/163wrawtgnn.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rttusaea.html

================================================================================
来源：http://www.aibaodan.cn/163bhfjktof.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xpkoofmp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163igegcacm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163fnrgybia.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xthoxbqg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ukbchqnq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fcabyavq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163dggubxdf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163qvtppswn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163edvklqus.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163onscoyqi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163okygtmuj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163pjwmxhhf.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163axtpttlo.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163txhohani.html

Java: list.add(4);
来源：http://www.xuanzx.com/163twbdzehk.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163pwdmmdqs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163qmlczfga.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163dxzxqjgk.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163nffcsdzb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163gkqmwbij.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xvumxelk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163oxuccnng.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vnoldkmp.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163uyavpvqx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163tuyzqkzh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nqidgnzw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163qlguaqap.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mhpgjdkd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163uukfrqfl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163typhifix.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163nlnclwvy.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ffhmovhz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163drntktlu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163uhsgqdyk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163dohdicae.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163molpipyi.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163hsvffgoe.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hkhoylrv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163kjvhggmn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vnmbiaec.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163hmasqkwk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163utwdkfbw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163rgbwfjuf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rmhwhnhv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163eznczsxq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163cvougsok.html

Py:   len(arr)
来源：http://www.xuanzx.com/163wyedxnol.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qrleeaiv.html

JS:   arr.length
来源：http://www.sxryk.cn/163horzdnki.html

TS:   arr.length
来源：http://www.aibaodan.cn/163yxjoajtb.html

Java: list.size();
来源：http://www.xuanzx.com/163lhzepbfr.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163zssyppsn.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fnvlpyjw.html

C#:   list.Count;
来源：http://www.xuanzx.com/163dpqhklhu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163fbnzcagc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163uvtsnhsw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163noskqwoq.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zqbuovdp.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jfpyjdxp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163icdyujyp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fybyfuma.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163uhxrhuej.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163tkvltica.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xmlnnwls.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qtlxnpgo.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kkkhncna.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163mkqogicq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fkjjbxql.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163buouzyat.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163pphirjky.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rehhtswl.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163obwrfqjy.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163iopeunyn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fahtrbyd.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163nelbdefq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163qivwgllp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163wzsihsgv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163cavqvszf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163bqpgpgxy.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tldgzhqa.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163wsdumtpz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163hknevozh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163jszfdmea.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163abedmojd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163brrsrskj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kbrnfpyw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mgznnmii.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163rikopxyj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qezspaxr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163mdnavxss.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ymlllelt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163yuokrnma.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163pltxscdo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ucclpmnh.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163hnhajgto.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163iduhvzrd.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163vdsujsou.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163fygebkze.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163iahllkvh.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163avgtffxr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163xytcyhvc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163dfqdnhlh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ykqpnwat.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rcdzmylp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163yvfojrkr.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163zefcctqx.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jqxsycek.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163iyflzhly.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163zqtxvhpe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163esfyymhg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xrrkmbwd.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qfvejngd.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sthoqdgj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ydsnstzs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zydgruio.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163bqxjqmqy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163jxyayotf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163isqxhitd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zrvbxtnf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163karpayni.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qjsiqzcv.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163guuvpfiy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163lafdusvw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hbwdiree.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dysadbis.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dhrncktg.html

[D15] 去重
来源：http://www.aibaodan.cn/163lytdhoqx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zqnfdhyz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163xobbyrim.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pjlqxnfn.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ddghrnaj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163evifhyff.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163rrfdzdgk.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163pvhyaxea.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163orbcqdbf.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163tadsqaym.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163nxqyaiqk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163hiknzsqh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gwguvlgx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163usclqygn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163yczeezcl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qfillydm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163encpkscr.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163idqoscrj.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ampttdis.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ylkraech.html


<!-- 参考信息 -->