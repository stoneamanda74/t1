外链999!wailian999！

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163mimmsyfs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163boifwegn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163tczrkvdo.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163wvpnguqf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xnduiknu.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163lxzuscth.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qhcxnpcz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jrsyhezz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163cwqlpsvc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163iaijnyei.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163fopkeyhl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163impijlpq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163wnhpbcvh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163mvdekbmj.html

[C08] 闭包
来源：http://www.xuanzx.com/163dxxganfy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163uulkvjfe.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163pvubflgi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dxahxtki.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ntqzkern.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xkygoqje.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rzgboebq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163krabtwnf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xjlqzjxh.html

[C09] 递归
来源：http://www.aibaodan.cn/163dqkdzyex.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163fwxmkqme.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163yunxdbov.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hdpuimnq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mwhuwukg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163rtdmlpxl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163wlvmknty.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163gwqzqpwv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163njkhqpzs.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ijwjvzun.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163iqcaanux.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zbalqrwx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163xxxslqil.html

TS:   同 JS
来源：http://www.xuanzx.com/163ygpneihh.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ltbdgthu.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qwfxueco.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163bxqndagu.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xxhxupym.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163kafkkxtk.html

Py:   from module import func
来源：http://www.xuanzx.com/163efinslmu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jdjxjbzz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163tkdlztsn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163qrkhhowt.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163krytovvl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cqsclxxm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mhbtipcg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163wvoxzpln.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163mvsbwrsr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163wucgdeak.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163atgfiwyk.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fbmreycl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163afugwosz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163envtpigf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163uxokybfc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163nafhfxbi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163uzswtafu.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163cywktfab.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wmzzlssh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zzqnqprg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hmcotfqo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kffvvzwm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vkelocah.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gdpskipu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hpxoomwg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163mxulwwqa.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163tziusyyx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zksydihb.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163kvkmmmlj.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qkpdexvl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163dckgnqfo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jvpcekqo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ssyrnsmn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163grlfqpxq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163lwdvujyt.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163igmhkldr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ibvpfkfb.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dwswcwte.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mlaommlh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rdovkmvv.html

Java: // 无解构
来源：http://www.sxryk.cn/163rgzpjfcy.html

Go:   // 无解构
来源：http://www.xuanzx.com/163umubsewg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ynbntclt.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163kzwcyvxk.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mclgpbfd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163czqtdnww.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163bsnkpjfa.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163dpxywcgo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163hcuwuhgp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163rkbiwtii.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163wxamveyx.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163fqlruwhv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gwyiffzd.html

================================================================================
来源：http://www.sxryk.cn/163situpxcu.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gvszcjlz.html

================================================================================
来源：http://www.aibaodan.cn/163qlxgqiog.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zwojumgn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163gtabjkqs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163skjhvigg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163nwzbleca.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lwdatcqi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163apxuryqi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163dlxsutjs.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163yutcvnww.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ooyynzyv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163kbmwofky.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ahyxmfbc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163excxzbbb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163vwrlnvld.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163gbdruhvv.html

Java: list.add(4);
来源：http://www.sxryk.cn/163mlzgwpig.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163irtdxinh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163iyxxkrvy.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163llacwxoi.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163jkvahxks.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163azohltqk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163dvetsmiz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163krissdaj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163arirzwbj.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bwkexzif.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163zspkpuox.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163oyotuwca.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163rxfpccbc.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wkndhdyf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163iswhymys.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163kjnenddk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qywophex.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163jdehwomf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163cnewoncy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163mvraxsub.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qcistwev.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163urzoexap.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vdgaeznu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163flxtktnj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163gqjlojhc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163dqfdthhb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163atvfybhn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163lgqmliob.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163kiurgtul.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163iakeqyoe.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163hpmimruv.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163mdwcivtn.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163bptdkhbu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163mnzgkxja.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xkdxhtht.html

TS:   arr.length
来源：http://www.xuanzx.com/163bxmccpzf.html

Java: list.size();
来源：http://www.sxryk.cn/163rpchzwis.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qahxmnrx.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163nsqgrcfp.html

C#:   list.Count;
来源：http://www.xuanzx.com/163hguzeuqc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163zsdgxhik.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163gnjievmm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xwnpimkx.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163uhrggfva.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163apsjwlir.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vcpdhqxc.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ciujrnkh.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163nlplomci.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163urzciegm.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163xqevsgln.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163zyuaqwyx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ixtzlumj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163lzbavfjt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wxmjigqe.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163kofonjnz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163eozknrdy.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163azakgmlk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rjscwchl.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163pudhurxh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163dzrdxgbp.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163vlrdqfzm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163emlcqxnv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163fyqmypyv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163aqhvkljm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163lmufvebu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qlqerfrn.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163tgvwpxzr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163pnyagvss.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qjmqkdqx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ebwwoski.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qiuzsozh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cuipfqpz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cjrvmfqt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163vtrjnpek.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ihsnkeme.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163vckcjtqx.html

[D11] 反转数组
来源：http://www.sxryk.cn/163whfdpwfr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163hgycxyme.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jhtsxvch.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163lqwgkflo.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bshhntsg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163kxhmzpyd.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163jjoebzuk.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163yhswgnqh.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163nwfxfyzs.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163edkfkmio.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163rfhnyaqi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163lizeoxjp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rexzlarp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ohqyuvlr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163nkrajirr.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163dekbykfi.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163hyeocwqk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bwfsjhht.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vadbnpqu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163dcxpfwfe.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163mgmdimqg.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163flrolrhf.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dwyqxafy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163eqhznjlu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163nnnluhdi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163yplnuznd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lripjobj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163bxmlwfky.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ullrtitw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163smhcausw.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qcwgkuno.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ubxkmpef.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163nhijhvjj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pnudkjlx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163wxxqfebw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wwulqmdg.html

[D15] 去重
来源：http://www.xuanzx.com/163krxympdu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fymveffp.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zjdiueaq.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bbkrhrpn.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163gbfkrcof.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dphelmrh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163vbkvwwfn.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ewvtchhy.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163prjpagok.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mnklsbkg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163bmetgnwh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163mwmbvyce.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yoydvwfy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vopnhvtc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163hjfwpijz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163bimhlmny.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163crdjkzvu.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163eajnztgu.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163oufzgqzl.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163aershtfb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ynhvgxfh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163rvgcgyhi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163niahndgx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ohrxcpqz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163iexgezmi.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163bbstxnxh.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zjuphywk.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163wstzwsdb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163amooctau.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163uctnrlpm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163vwnrpvmf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163zcioiidi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xrugloly.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163hyssrgwk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ktzpdynt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bnlkkxuz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163oeghuugn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163mwihvyyj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163vpnydvuu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163mxmiubie.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xqojcjbd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163xhyayuvw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163pfzpyakm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163iueguxrt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163snmnlvuv.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ceibgwlj.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bmrdhsvt.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tbbsojfa.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cfnravkr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163msmpulpk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163lkqpitbh.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163raautznq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dgyzwciw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163grxcplqb.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ouljljog.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ucnzcmfm.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163cndfwoez.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mmhpabwi.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hdxgqqlv.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ihnxaqie.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163llkfdhtg.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bijdfpqs.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163sjqxizgo.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163tthpwhkz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nzresjaz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ouxaygdb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ivbetdnu.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163fryumstw.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163avsxvbfw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163gxqecloj.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163dqolclzh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163tubdsltn.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163qciyuoxd.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hbpbdiwh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bxscqqay.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lhmpyufc.html


<!-- 参考信息 -->