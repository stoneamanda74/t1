外链999!wailian999！

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163tduxwytv.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163iuinlgcr.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mwzmjabd.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163uwfomykh.html

Py:   return a, b
来源：http://www.xuanzx.com/163keigeizn.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163jyhgvtaq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163nnrmgjli.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163baizregj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163tyqivsqv.html

Go:   return a, b
来源：http://www.xuanzx.com/163uaoedmyt.html

Ruby: return a, b
来源：http://www.xuanzx.com/163mqwtnpzr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163keoxvaxs.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163skzjqiea.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163pbtgljry.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mjtcpyqz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163oigawuqt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xcxfklwc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163eiaeswla.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163jqwxlylb.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163sflsbvhl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ynbltzrt.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163fpaysgub.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163odmutvhm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163fnqxasbx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163chywnsoi.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fnwxzqao.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163mwxvwbfy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163donewhel.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163tdnaxsgt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163uysnsssp.html

[C08] 闭包
来源：http://www.sxryk.cn/163wktzmysw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qoqrvxzs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zhhhflxr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vnlxxdiv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qprnvlzy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vvnqrvxj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163dmfbcjwv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163mdfheuji.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zwvucryy.html

[C09] 递归
来源：http://www.sxryk.cn/163jbzaoxsn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zgvurced.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163gzdmmjue.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hhdqrdka.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xcjvhsto.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163pvhshcdk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ienrvgog.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163putetlpk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163kmyoybtc.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163vgmlbske.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163buhoisvf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ddjppyfd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163dxqxrlwc.html

TS:   同 JS
来源：http://www.sxryk.cn/163lhdtveiw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ukhctwyi.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163cxplqdhu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163pkefsycn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ikvilgyq.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ffbxircs.html

Py:   from module import func
来源：http://www.sxryk.cn/163ubbknhgf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ecaghapn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zzvkkamj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163lmecwnrf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163xaqytmjb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163dtzeuvfw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163rbipjtun.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163xydkyfii.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mudalzqy.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ruudqhkg.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163jaxippha.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ppyustsp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dzzyjxim.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163lhhvgekb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163tnnxqecx.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163sncwtvuc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163exxmggle.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xfwpiihj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163tgggixup.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163adpfnpyc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163obfvvykb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gmnzuhew.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uybzkhul.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163omzmjqgk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163csvfqxak.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163owkrvfut.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kkboxhqr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163dzrwfidn.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163liiyzdzz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163teieztly.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163homvowht.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vuitobzg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163eynremis.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ewmgbrmf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163cjncuscv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163cbdoodts.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163rkekbvhv.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163fnfvudti.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wcbfyawi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163wdjvjddq.html

Java: // 无解构
来源：http://www.sxryk.cn/163exxcnguu.html

Go:   // 无解构
来源：http://www.xuanzx.com/163centqgda.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163gvdjxbqd.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jrzsnnjg.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163daxubptu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163dwiwlyqp.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163mvyvdfjs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163olnbwsww.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qhangqsb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163yiitkaze.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hkfibriw.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vhawsigu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163hqxvyshn.html

================================================================================
来源：http://www.xuanzx.com/163smqvgxqq.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163qozchvjj.html

================================================================================
来源：http://www.xuanzx.com/163cqwgxiic.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163pxscmezb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163fwbuwfkm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163brsyotrm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163tonfgfkd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163gfjlommi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163mdutujae.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ukoerzwh.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163whglmryo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vsjdfali.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ddzkrcmg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xahhpxfm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163viainieh.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fxdvrusq.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163wjirfeuh.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tzqmlebc.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163epekkwoa.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163uvzbnpip.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hfebmccn.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qsxyjtal.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ljxxgbae.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163uryisqyg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163rnmkpruu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vuvhtcae.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lvwzutgf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ndfirhqi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163tsuqyucy.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163clmebygp.html

[D04] 删除元素
来源：http://www.sxryk.cn/163lidquqpo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xvncwoks.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163pktkyrtq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ywvjgnqx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163raptyxpe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163qkisuyji.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163iduvrngu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163rldfuyrj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ehtmvmbs.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163exeoukdj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lympgoeb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163zyirmwvq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ewkpwrmq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163euaokjjj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163gjfgnamb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ukrtedks.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rupjozqu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163yzqvzumt.html

[D06] 数组长度
来源：http://www.xuanzx.com/163eygzfecx.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ebbowswp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163hlccsgks.html

JS:   arr.length
来源：http://www.sxryk.cn/163eztojzmw.html

TS:   arr.length
来源：http://www.xuanzx.com/163xcwdqyes.html

Java: list.size();
来源：http://www.aibaodan.cn/163iswkcxym.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lvjanvmc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163nswziwbc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163lxmgvnfo.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dtbmtpdn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qtofptyy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ttsdhpci.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jlgiidkj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ptauljca.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163sxwcghlg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163dafnaalk.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163negksndx.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163lefxnzcp.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gidpkudn.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ryngqpnt.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163pclmjclm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163axprqokg.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163vltsmxfi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163xwmbwddy.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163oovbrzmc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qmhkyndd.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nqrtthfz.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ukbiwzmm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hsavmued.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163aulytgym.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wjcdqxat.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163uvqqgbbr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163nlgtxptq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ykrbcdzh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uokroswm.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ugltpfjx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hrlhxogn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163kuvdoqii.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lbvclfpa.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uhymzttp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hyrfmmlv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163yvncgcpd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jdrforru.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163kavofsdw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163bnuioeec.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163kyvhjgfe.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163uecwqbat.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ogdbcexh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163liokbebe.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ivrnxrft.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163btppjlom.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163kthkuuot.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163cdehzntf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163dhhqiabi.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163bwhzxvvh.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163vqcfubxd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mbsxsaky.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kayfzhpu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rplggqrz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ilybtkck.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hwwivodl.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163kwieqfra.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rmfroxwf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163zsgvmyup.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vxigwagn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kxlhnqgr.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163eszsdnpj.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zaucblxd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163klxigwxg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163onlbmwtx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163kqpyerft.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lgogoddt.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163txczetic.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163dcmmoyoe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163inrzpahm.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163agenhbez.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yyunrqcb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163scebdmaq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163drjvvotw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163dnrayhce.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163csxjctli.html

[D15] 去重
来源：http://www.sxryk.cn/163nawpfdiz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cdmnyaby.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ywvkccif.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163pbqfvlkp.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rwbziigt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163eyeaamhf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fvvfofoz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163gitwvsit.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163xrwldlqv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163tgajftmj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163rfamhaca.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163eglxhqns.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rvatkcec.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hhnybpqi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163hpbuqvdr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163klvuxxai.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rwdaibsx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wgijshlg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qtoqyrlb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163fgoczffy.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163loeniqih.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pldbkbqp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163yiuqiail.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pzltjsxy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163kvokihhs.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163xrjqulbh.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163buqwanzj.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163tjqbnyma.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163siapjosc.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163plukqieu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163azomsquz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163tfiknmqc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163rtpmggph.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163nfddhxiv.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163glaupvyd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wxrfpodr.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163xewrwbdc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163lhrbxxns.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163uahitmsi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jvxltblm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ovrwggcc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163lwveyken.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163uoxhhkpc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163gkpamvgw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163zxqajtkg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163nelyujcd.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163bffmpgul.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qhnsuaqc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tryzxpsu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yjmmzpuc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163aiztslno.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163nkntxrcb.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163woiielyy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163cyuvrtap.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163kpdhgqda.html

Py:   x in arr
来源：http://www.sxryk.cn/163ujxodvge.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163eqljamap.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163wakoeedb.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163abgsojpr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163mdmtaxxj.html


<!-- 参考信息 -->