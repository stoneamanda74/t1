外链999!wailian999！

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163pbvoqiul.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163jxyevcgv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ijmvngxe.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163enbgnhuf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163anlvtdyn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ylmrbelk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163bwcuesgn.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163qivpgbkr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163gpstmpbs.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163puwtorxv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163sgkzlcpn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163iucnwcix.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163uyxlvmxp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163kuoufflw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163trbutthc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163utfyvnkz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163zjyxeicv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163xidkigie.html

[C08] 闭包
来源：http://www.xuanzx.com/163kfivswjv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qeoxvjjl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qoujvdbh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uiyxhvwv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lwxzudor.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ezpsstqq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163eahbmmow.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dgtsrunq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vytcmean.html

[C09] 递归
来源：http://www.aibaodan.cn/163koqfpjpu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163isnadddf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bmtjmbyh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163knmmlzfm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wkptkcct.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163yfeuhoor.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ipjydier.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ujalpdiu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163eiekwwez.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ugodquwo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vctygwaw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163fikwvtdd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163xxxjaqqf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zohdoyib.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qsifboek.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163nizyoofq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163gqoqhqtf.html

C#:   块级作用域
来源：http://www.sxryk.cn/163dvunhnhh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163jdlqiulo.html

Py:   from module import func
来源：http://www.xuanzx.com/163wwxyvsee.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163lwniautk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163yxpuxfxb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163uxbiidug.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163tsvxzisu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163kwrotlpe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163bwhfgpby.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vvfrvhjc.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zwvniynq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163nodawbcz.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ugukamfk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tlwaqhys.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163quotqfly.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qfmtpxhy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163pxbfzktp.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163gaqyplvm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zcybujhd.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zflqfgmi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lkiaxnwy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zodcksrd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163osurqxku.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fgltekfk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wopjhgge.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163kadsvzuh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163auiuhghy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163oxifijvo.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163pvjbmkhr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pannppev.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ffbnpcvv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163uetjzrqw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zmnnmkjt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jofgfbzh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163sllagfpm.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163njofgayh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163yfktyytr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ahablsar.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ywvxibfy.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163fmktgcms.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163cusfcgqb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163iebyhvkb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163gprmdfgv.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pwhintzk.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163edipfymx.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163diqfwyyz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163jcrwoxai.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ozaefcqb.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163lddrkgnv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163hjenyojw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ddaluizq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163vczaguiv.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163rutlrzgf.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163rwsmigbg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ublhfvbx.html

================================================================================
来源：http://www.aibaodan.cn/163tevpiomi.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ehwyxwyq.html

================================================================================
来源：http://www.sxryk.cn/163zstxrrkl.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mbigzdei.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163clqdxnfp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163kcgsqmex.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163gejfzwgw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ydmddcpb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fwoedssg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163yxlrtgot.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163bjqyhggf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163pezpvkut.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163efufgvse.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163yubcpwio.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163bulufgvc.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163sixpijxk.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163jzxransx.html

Java: list.add(4);
来源：http://www.sxryk.cn/163yianrfyr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zsfhbvce.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163yhzgzsht.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163spnemjxk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dbbguyxu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163gzoilghd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163kpiqqeib.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163nptxrxbi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163gegthxwa.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163stipeepe.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163qqwsptow.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jkmsjgfy.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vyjkrwnc.html

[D04] 删除元素
来源：http://www.sxryk.cn/163lvtommkq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vvizkvyo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163bqosbcly.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163jkorvzpl.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163bphnskfu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163evnsiseo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163nkqjhsyh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163rmyinyvb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163sljtmwas.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fhqjisju.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163msxeaboe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163zwuewlcm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163unjwphqd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wfqmwler.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163npmhisuo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163gpkkwfni.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163biovqmmh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163scdazyqa.html

[D06] 数组长度
来源：http://www.xuanzx.com/163kkwpseta.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mwbaheeh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163fmsrnklz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163puwwrvxn.html

TS:   arr.length
来源：http://www.xuanzx.com/163xaukxutn.html

Java: list.size();
来源：http://www.aibaodan.cn/163fihgxrtc.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xqbhoglv.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163qvktbidq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wyzxfmro.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163dtwzsxrz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163meatskjr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163hzyvxfwq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163udrpvqgc.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bdjpjllb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163eymqdfcy.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163sphpldmy.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163dqxuagtf.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163nljzrjby.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163aoannanu.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163nfkwfiyj.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163yosmdslo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lvnykfnc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163bjyepqqk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163wnyhppdh.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ogxlogan.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163iibgyuzr.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ibiiuwip.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163kinkwpwd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qaupjewe.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163mvsndvku.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163nlweertd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ycoovfno.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163nhijdrch.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163oweylkif.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qkjcpvrg.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163bsmraomc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dplgcnyj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163jenftkfa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rzkiixuq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pbmjzamp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xajnkycv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163eqobgyce.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hdckaovi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163wzxpwzus.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163uazujqwi.html

[D11] 反转数组
来源：http://www.xuanzx.com/163vxuhtdcb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163gdahsjsi.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wqjxqbja.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tlcxilfo.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163nadtgasv.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wzhedmyc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163fajyrhct.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kvodkjcm.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163orwoseui.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163zclbesyt.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163erjcgrvx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163kxckhyqy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lhebhbbw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163palcjqvu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ejoqteed.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zdqlfydf.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163abahojgx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163wavljcxz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ljkoswuv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163jrqawdjr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bikxurwm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tzsrwkmp.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mdpeouop.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163nwzkhbpz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163eajxaeqm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xthirugl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163okmtjcdg.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163frwikxbo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163vijwhpkb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hspbcped.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vkunkwpt.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ikjjsncy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163falfzjfq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163uppnxswn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jgvarjkp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163dplsrwpz.html

[D15] 去重
来源：http://www.xuanzx.com/163yljwkxna.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163bucglljg.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163fdawgzkk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163viutfhnh.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rojxuzzd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163idadhzkw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ndyxztgy.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ahxmzfpc.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hshbqihd.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jykoyzlp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163xeinrent.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163aegnwsov.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xjapfsft.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163dqqprjsl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163aqdsporu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163jeipoqho.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163rxvuwibv.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163tzqqygen.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163wghqjjyd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163sdkmeqnm.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163denosyqy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163tpjoejkc.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163aaclccxl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163tppejdpj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163oucbuwxi.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qtzvmmhf.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ecfihuce.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dkljalrf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bybjrpex.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ioojmxwf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163mukczhhs.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163xkmrbjxd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163cljvnlhc.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163mdgragxg.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163fxbgucfg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163nqhincrf.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163nodvkrhp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163djexlqpf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163syidlqib.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163qtecgajj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ollfqovi.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tevsmypj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163cynfrnki.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163qslwylxj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163sobddtzv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163crslpkoa.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ukfhwsyo.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dclopfws.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cmngffcd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163weclmwyv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vufpfwfi.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163aslezywv.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163rcxgpajv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163xprftifq.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cgbfshhv.html

Py:   x in arr
来源：http://www.xuanzx.com/163kasobhpq.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ctrwblxg.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163pqzdmphn.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163dlmgakua.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163yusfmyti.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ovgmdpkw.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163dlaoriso.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163xndlsqlo.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163xgbbwwhw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ffcupuzg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163bxdeggdl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163kronpfmb.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kjnobodw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163jojofhgk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163dsrhtadv.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163uxanmooo.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163cxweooyh.html


<!-- 参考信息 -->