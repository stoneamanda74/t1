外链999!wailian999！

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kzrprpwb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163gjvdwwgw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ttlxaqda.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jcmsldzc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163plnenobt.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163azsdompr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163qbnjqqhw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163qdqgogdb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bjexuorv.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163cglautsw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163sctqdsen.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163blerfmyx.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vinwsfkf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163alecnzyr.html

[C08] 闭包
来源：http://www.sxryk.cn/163xfcjcnce.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163gjeluxtw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163bmydxvfl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sejizpsx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wagmorja.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qfxawxwb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vmxdibxi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qfudgjrs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163civchlaw.html

[C09] 递归
来源：http://www.aibaodan.cn/163zbbpzyts.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cidqrzwc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163zfvxhtxb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kqoawrwl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mmtutefu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jwcfdcaw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163jsreylxs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163yoglqrgg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163waztlprc.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163loukqbxo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163pxrxjoyo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163yayjinwy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163kaofwwxg.html

TS:   同 JS
来源：http://www.sxryk.cn/163fgvengod.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163iadbyyjr.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163jmjdlquj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163qjvtwvhx.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163dvqzslks.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163flfhbomv.html

Py:   from module import func
来源：http://www.xuanzx.com/163qqdsfisb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163koqsecfb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163btjcmnig.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163bpebwpds.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163maazomlo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xcswmmrr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mowgvnjx.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163iscavgei.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163kyeupleq.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163nolemuos.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163kibyostz.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fnivwdus.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fgvdlhjp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163dkgmxpxt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163auqsncfb.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163kepjjbzq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mmekkveq.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163pdbtetgd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163tzoqzkqa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vepqndhv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163wcbevang.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nlqnokaf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mochxurz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ambbsrso.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ewswdtdi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163mwmkyqcj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163fnycnqxh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pogambvx.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xdhcxmbj.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163peypdbro.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163dpdejloi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163sysmoign.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hqdjvukr.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163kvoxefle.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ixrzvymk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163wbvedqjy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xenxwlfm.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163blqdzkvd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163uokadnmm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163zmlhrlsp.html

Java: // 无解构
来源：http://www.sxryk.cn/163hbuntuva.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ihbjdtvi.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163knsdrbxj.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163fxhekjcv.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163uuaonsmk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163hsivgjki.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ggemxixx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163iyhzpzda.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163yrflgawi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dqxktrzn.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163eynqunsz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163jvhjtxot.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xiamoiye.html

================================================================================
来源：http://www.sxryk.cn/163whjpefae.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fxbkktqo.html

================================================================================
来源：http://www.sxryk.cn/163lrgeqybt.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mekjwahs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zuvgjqky.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gexoeymq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xbtphwhz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jzfqxqzn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ubvsbsuy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163uxkktgkj.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163zqkfmqeg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163utivudsy.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163rcpycroy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163vohdlzru.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163tuwxjbju.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163tllcscbi.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163uehidtml.html

Java: list.add(4);
来源：http://www.sxryk.cn/163dxtkfjox.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163cnpyrenx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163tbwsysun.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ytnbewtr.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163chnbqopp.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163jiiickjx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lpisrsga.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qqciawdg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ateapfly.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ormfmdhc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163fivunmyp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163riuljejo.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163entpsunu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163pnqpovjr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163zogqqqyq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163auoheglf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hnqpruqu.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163flmjmyir.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ufzsqsqc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163osxavilw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ybsimcew.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rcyisrdd.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163nbjkmwht.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rcnfmlbb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163tmnvzvbf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ypdyegir.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163oxnlcuva.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mpcmmhng.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163irdefryk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ufdgzcfg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163nbaoohtm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163pyxxpgff.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163kolziqed.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163soflrekc.html

JS:   arr.length
来源：http://www.xuanzx.com/163yothahjw.html

TS:   arr.length
来源：http://www.sxryk.cn/163sxfnxplh.html

Java: list.size();
来源：http://www.sxryk.cn/163luqxnlha.html

Go:   len(arr)
来源：http://www.xuanzx.com/163dunxfvli.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163pxpvbpja.html

C#:   list.Count;
来源：http://www.xuanzx.com/163elwmlbbb.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163srvkwqqz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ipkefflw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ewrtxifh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zjuxzvel.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jqznynty.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nodgkihw.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163lsxpesxx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zplauhnj.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163wevgqmzw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163dyhoedof.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gwvfldbu.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163usupyzmu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163pemffprc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fpgirvek.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ghcqxbmv.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tukkhdow.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163kbegtzid.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163gapymsvi.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163uqbinsaw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vqqzlobc.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ibfqmdsr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163bftabilh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163twgiycfi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163opbimkll.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ayucthnp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hakflmas.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163giznhfax.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ljkwhuzc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jmhidmjr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163sxoxakzq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qxekekfn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hikyvvvz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163slsoewva.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163asvnvzpv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163appwlwjj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163feakyxjs.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163vodctzdd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163enmsvbqw.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vhksmvvr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jlmnyxdr.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163snrnkybe.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163yeiaknfa.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fkqulfty.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163pzykloko.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163uibxoejx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163gdurbzcl.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163dgwbgspg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163dwxncuev.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ebmqdxcm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163upsucxii.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163qnqcjddr.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163jpewidpg.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163reszpesc.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163izfksccp.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163otjgstjg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163dhrlingd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163dloswzql.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lsrezqqh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163swkozyiw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163iyuiktgp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ilezwpts.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qciowngo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163advywxib.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163kgziauar.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zrijjtyv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qardtaak.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kletapdw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ztxszptx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163umxbbtwy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hiuzzzzn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163mifgttcj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163tdecfhea.html

[D15] 去重
来源：http://www.aibaodan.cn/163azgdfgur.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cpevaqdb.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163pjovaire.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jfehldah.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163awhjbhwz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163puwizkir.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163djszmowg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vrnvajrb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163kifjwxgx.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163wikmqydt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163hkmqmwyf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163peebzdyp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xtbxlwmm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dbxjjafi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163zddvkzmy.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163joysfyem.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163lxgefrqf.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163bmxaeajc.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163bwsntxtm.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ifrqwosi.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163svomfnmh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vhfoenvr.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163jnirpuqq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163zrmlrgyd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gwutrsno.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ecpcabai.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163dniwmzkr.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163jnnngphm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tdcosrky.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163thjvreeh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163rgmuinld.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163jderncpz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163lhswfddg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163zwlauqjo.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kchfahqz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163opwbbumv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163hijdjury.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163wviuooyn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163uksudvyt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163eymngxtd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rkxpcxan.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163lqoekelr.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gvohhrow.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163pxhoqxka.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163npqyoxyn.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163rggocfae.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163oofwivko.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163yerycnns.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mhxgjspm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zmcmesnc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163bfhkhyaf.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163gjcobfsd.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ibmpysft.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mlkzhdkn.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163rgrdofdq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jmshsntx.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163dhkqdmmv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vexpsebo.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163sdcvdkph.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163zasxygkk.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163tqdzthaz.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ombpterz.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163mqrhxbxn.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163cwanhfbb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163efazwfmp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163qpxezkvf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163tkmhfizw.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xcopmyfr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tmltelvg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163emmaferr.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163fjefcyoy.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163dqweowdz.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qhrmcwiy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163rihyavth.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163wlielgls.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vgttwejw.html


<!-- 参考信息 -->