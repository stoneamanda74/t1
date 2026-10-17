外链999!wailian999！

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163chfjpqam.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163yyqrsyeb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163wpnqjtml.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163polduugy.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ljyykbfu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hxmvwsay.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163kxoxzpxw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163okgexxet.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163uytagqrz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163wsfsotio.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163sekwbasm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ouzmzkgm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163qikvaqgp.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ftiwmqeb.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163fmdbeaba.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rpaijdxt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163edwslloh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163othbhena.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163yyiqyzkv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163hrwfghyf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qpmyuhpo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xivuekvz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163jpeitxle.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163rtmehxyt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163itqzuwtu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zgsbdcfx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163pjvqwrjs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vyjovles.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fqvexohl.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cecujify.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rmckgzvv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zjolznqh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163bhnlsczv.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163vhnoqruj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163oqxkdpqa.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mrfkqsoy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nauqmbgi.html

Go:   return a, b
来源：http://www.aibaodan.cn/163vrlreeek.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wsgxpaar.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ptlkddgn.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163qnxslhxp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163mitfmvpu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wslpdamy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163fxdtifno.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163fjgvlzxq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ywhhpdit.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163faetgcvr.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ifvbuftw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163lbxthsjn.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ypwmvsuh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163syqdqqyj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163lrnvrotg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163kvfjhlwk.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163yzucengm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163zxiovgfi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jvibiwdg.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vofdgboy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163meuaqpoi.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jpsbvuav.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163kqomekod.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163dtygyady.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xulhknje.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zkkoadik.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ievbciqf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163djfrozna.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163gmwkdvfs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zgoznyvz.html

[C09] 递归
来源：http://www.sxryk.cn/163aocorazs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ibwmmobk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hmcodegc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pjxmrzmm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163kyxfgsez.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163rlyfdqcf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163uyczkpyg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163eloztmns.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163kamjtckz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163idikjqna.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163nhubxhzk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163auzxalea.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xonyfndw.html

TS:   同 JS
来源：http://www.xuanzx.com/163esxvinhq.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163uybdyrda.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ddwfeeks.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ttjeiwrp.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gqxlripr.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ioxmpqgj.html

Py:   from module import func
来源：http://www.aibaodan.cn/163oxbstegs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dplddxeo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qbnibzjv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163hapxjbae.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163judvcbyt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163bmdcuapr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dolcsuvb.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163joonbvwk.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ytxbqmoc.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163kphmhwqn.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ijtefwze.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163btwqqdut.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vxxysajt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lkmhfaom.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163elamgclg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dfwvihyf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163maiemkss.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163rmmtycxk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163srwhhdqe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dzlpmncz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163rhhlaqhp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gggfmpbi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fsyhuymk.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163koyadtgw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163obslzqbk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163sjxfises.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jcxdbyqe.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163wekykxlz.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163sbscljjm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163sjsreyqa.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zjbaibfy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163mjxaskkj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163esyboprr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163kiyvmlcq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qmkwvvoi.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163pxzllzez.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rylxajqn.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163obytlrju.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163qbgfaqzt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163cvdsxrub.html

Java: // 无解构
来源：http://www.xuanzx.com/163zbtkwiwz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163enzvibtc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163pawnprmo.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163nrhybckh.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163nklpglbq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163aitvburh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ijrjjsog.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163wghwskkc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163djicrqej.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163oojaiork.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xndsppge.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bcifzang.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163qpdumvsg.html

================================================================================
来源：http://www.xuanzx.com/163ignlgspw.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jmxqzect.html

================================================================================
来源：http://www.aibaodan.cn/163ejsbslyf.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163boqzdnci.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qhkcoigm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bljbtxpr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163eufghvkm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163hdlfeudx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163iyxrrkha.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vqyqqopr.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ulnqhuss.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rnnurvdp.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163fcqzrspz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ivvxdgxl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163urxcrjiv.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xqovmvkr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163znwyonpg.html

Java: list.add(4);
来源：http://www.sxryk.cn/163cjevgttr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163iyrwkxjt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163gugowdtw.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163sphtuctp.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fslhyzzv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163cknqleda.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xvtmjeif.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ugrefcza.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163bedzgfsj.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ktjhmkcl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163bodmasgr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ddwlolqz.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163buhiebez.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163pryxiagh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163dmtckbeu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163dhgfcdel.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163yamnogbj.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163arjhtjuf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163nfowonak.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163plsfcjbu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ljvbqnov.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163pzwxagts.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ddepgtlj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zvnykphm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xxeyhftw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163eqlnqykf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163geuhvnlo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163fojjsfty.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163gpwuojcr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xnpgwdzr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gwobcglr.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163jhibgnil.html

Py:   len(arr)
来源：http://www.xuanzx.com/163blsjtdzn.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163reezpxzz.html

JS:   arr.length
来源：http://www.xuanzx.com/163dyxklhpb.html

TS:   arr.length
来源：http://www.sxryk.cn/163evciwzvo.html

Java: list.size();
来源：http://www.sxryk.cn/163ziwlxtql.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lyalgjqn.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163uwreqbru.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xizwuyww.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vbgvvtad.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163kpmypfzq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163cefqourj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rmssxotf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hgqmaxsv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163kjshnytm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163hyhfknbh.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ftcegqhy.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163quuzhsey.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jkfdsihu.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ltpdiczc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163gpwfcspy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163gqvhkpsi.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163veyptnpm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163dkgijiap.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163xatagvct.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wdalrkkf.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gyownouv.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163fwzhnxel.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rrqkqqju.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163dhwxbwnt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163lvotunzi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ghdqwxhi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163xmnufcfj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163bbnnufmf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163iwlmhdqy.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163rmqnyoan.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zqmyyzsg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163eabtfrpk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zxxhferj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nennxxyr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ayydmxbs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163doezeblc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zkkqrooq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bitlkhuw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163wydssrgz.html

[D11] 反转数组
来源：http://www.xuanzx.com/163kesclybw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cgmifigw.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163bfqwblas.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dxthwmbr.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163hxdzsyqr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163blokedur.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ukzluxgi.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163btdouudm.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163kqujwhoj.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163imkeeuho.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qmjetiuy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rklqesuf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jfhflcak.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zjwuqkqg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163aevbanoq.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vkxfuwrw.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163sweojkkp.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163bisfmeph.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163guhttxsf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163toeyntro.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163dumxlnon.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nravyrvs.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dxiqemsu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163lrpvgksa.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xgoixyjf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163avgiozge.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163rzxnkakc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zhouuflo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163dgrxfcqq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vqjsxhfj.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zqdswlqz.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xzkopgyc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163pktikyof.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163aqovyeub.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zvkugzih.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163lppkydat.html

[D15] 去重
来源：http://www.aibaodan.cn/163wxrbbomf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163duwcazqd.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163yleszohs.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163avqwodyi.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qreslxqt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163qlyqiotw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163knrguckn.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wanukjjx.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kiraoemz.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163rcybovnb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lperrcli.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163szwlsabk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163omgyaahy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ddssdnye.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163xrieefjo.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163cfnyxuyx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163zkqsoamr.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gleruqma.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163msvxbdbm.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hdqrjmjo.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163dspcyokd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163drqqfwmv.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bqqodjhd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163sbfriybj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dddfaotk.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wlvympxp.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tvpruzmn.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lhlmvdjh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fzbswcbd.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163wmnkigys.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163arpfmfzv.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163xdimlcnp.html


<!-- 参考信息 -->