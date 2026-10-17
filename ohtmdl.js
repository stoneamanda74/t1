外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ipbasuhx.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163girlzesa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163behlzgzv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163otfzyqhj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163kpsdjeec.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ahbkugxh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163emjbznmz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163sgqiwwtr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163bumefvjb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163qbyqegon.html

[C08] 闭包
来源：http://www.aibaodan.cn/163bcqntmmx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ssxyyoyw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163igobmira.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kvokydrg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dhtyuypi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163tinahdvm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163zbvzizrq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163zordudkw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163oynzcmzb.html

[C09] 递归
来源：http://www.xuanzx.com/163mncddgcr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qffgkqpq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163hraytnog.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zmvgkdrz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163iepiwvwv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163kwbxjkup.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163thfixsbe.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163gjxbuphs.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163csrzsyhq.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rjyqockg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163snwiwlnb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163cuiavzry.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163hmatvfst.html

TS:   同 JS
来源：http://www.xuanzx.com/163zkgnoxib.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ucxyohoz.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qdwrozrh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163uxqmslpg.html

C#:   块级作用域
来源：http://www.sxryk.cn/163aaglshld.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163lsomfasc.html

Py:   from module import func
来源：http://www.xuanzx.com/163xhxqayxq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163iiofzidv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xuoerilq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qxqiruan.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lqswioas.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163kpedtrgz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ovwkptdg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163srjtzqqe.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163yunlusmp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kwwidxre.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zmumqyol.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163numfizgy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163osgxurcj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163pkmqcmti.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163wmclfcrg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dnmadamk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163srsufgvc.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163emeqnbvw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163chwbykhp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163payljnpj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163yynqpbmp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nwmyzlvx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wlfxaezk.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163gsrbjski.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163vitreqpc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xxrrccrs.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163phamqrzj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163lwrktvvm.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163zgfhyrrj.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qpiqfxpd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jzfqaodc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163hjstzpce.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163pymrozlj.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163wrjsmgpn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163bjxmfcds.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163cxelgsur.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163gxzvmfnq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163kwlgmwjl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163iwcxxomm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ioobklub.html

Java: // 无解构
来源：http://www.aibaodan.cn/163yuezxjig.html

Go:   // 无解构
来源：http://www.xuanzx.com/163lslljnuk.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163lwtawxzm.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163hbougwpm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163bmnjnjoo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ztguenta.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163wexmbqeb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ijxgunwo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jloxzmgn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163lkibynuj.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163dymyytiv.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163htsdqiuz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163fzgardwu.html

================================================================================
来源：http://www.sxryk.cn/163koxocifl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rzycvzkq.html

================================================================================
来源：http://www.sxryk.cn/163urfatqpn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163cbpikous.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163cgzlujos.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163aljrsyqq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163iqwtczys.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163sjiakaju.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163canxdckn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163uzlnpqpu.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163xatsndso.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vssxupen.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fsvprvbl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zuvsmytu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163fnrtnfld.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163bqtmjans.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zrdjwbrj.html

Java: list.add(4);
来源：http://www.sxryk.cn/163bevshsgg.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bgkwnzct.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163pcqnudts.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163flaipynr.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163tbqkhzmp.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ioepwzsb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163avhxubnk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lzhlvqhk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163wgpbtrkq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163wqybhghl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ahmzutzz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163clqkmnvl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ragdhwxl.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wfjebahe.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163eqpilrcx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163zbjurivi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163njxubhpr.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163qpzbnemb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163eakztkdd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163nqcanxvf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163uvjlmmnq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163mcfadthm.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163pdxojogo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ulrzkbwf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163kssynxpc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163jlcxqvsb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163cbrackib.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rmxhkbrp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hubhdirb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fgljnrgg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163jiqjzngr.html

[D06] 数组长度
来源：http://www.xuanzx.com/163vmqbjrsu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163whavunvv.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163bbwopmlv.html

JS:   arr.length
来源：http://www.aibaodan.cn/163atvczbqd.html

TS:   arr.length
来源：http://www.xuanzx.com/163dahipvbe.html

Java: list.size();
来源：http://www.sxryk.cn/163ewgpnjbi.html

Go:   len(arr)
来源：http://www.sxryk.cn/163dbvmfigd.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163slwcyyfe.html

C#:   list.Count;
来源：http://www.sxryk.cn/163grnyvdtv.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163zqxjyxeu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163fwcclowz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qmvsyibf.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163aouuwaba.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uxydiklk.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163cyenvzen.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163uzutcebf.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163tiifdvsj.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hkubqcdu.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gnmvegma.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vpjslevn.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ukcbsctd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163pqlpgvzs.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163kamoenxx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163xzachphy.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163partcuif.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163vflkjxnd.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vesaulsb.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fflpznxx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163cibivyjk.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163lyccwhsn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ynawygql.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163nawchple.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163adslbxhw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163myygysar.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nnvfqqhw.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163vgmalybm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163xfspkinb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jmixijpv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163nnsaufxc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dyuemvbl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fprwbyln.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163mzxslmfh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rjigshmb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163zxhldhzo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163zcglgflr.html

[D11] 反转数组
来源：http://www.xuanzx.com/163rggjfmwi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qnaaztyb.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163udzbaudq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ainkifjv.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163idmddema.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163uwkyhcoz.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163yxvmypik.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163pueledma.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163jopwtgqx.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163psdsdbwk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163twkvcrfa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163jbyenovw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163powxbztk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ifmzizxr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163xjcqtlze.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zpzfmflg.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163mduqbgcf.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ksyshrpf.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163tnhnqgxn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163xckhskjj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163lsrjhjia.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fhwmqgup.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mcbsbgvt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ehaprawq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163heottzml.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163fhmpjrkq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163lhgmzbqi.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163pwlvbiyf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163vivrvlaf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fnwbwuhe.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gsrtoxrr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lkdppdpv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163bfuchraz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163npexktsp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163caqeoduv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163nseailop.html

[D15] 去重
来源：http://www.sxryk.cn/163zwvbeskn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ofktboou.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163layhjwfh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rojstbwf.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rsktuhxg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163sitcivms.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163tuoniwnz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zstjaffu.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ahobnkgf.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163pcenabmn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163tikpmrjz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163rbdcscqf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163annwymbl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jqhhmfat.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163hrosmvan.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163sjuutlby.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163spoywmha.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163sdfcughn.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163trxyefta.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163kzyvgrpn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163djeekgoc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ryxrdgqi.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163lwfawxno.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163uigydasu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ooidudwt.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ozwtzafk.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163oeyatuhs.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fnrjsxqk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163reaepwqw.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163zgekiuax.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ihjokath.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gvyezpsq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163gsdyphxo.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163isajrxwa.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163jvkjvsnp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163syeymnne.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163sjnjrtlo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kxdnwaer.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163wxejwuaj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163dzukdcvb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zwgoqzem.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163vmxrctim.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xxrjrhxy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163bzsfecaz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163zgfnzubn.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ahjgnbuy.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163gffacdiw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163udawfwwb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163danoxsxv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qtzxyrbs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zsybtnjy.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163tizhrmxo.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xrhrvsrp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vobozedz.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rcnukktm.html

Py:   x in arr
来源：http://www.aibaodan.cn/163eqcqrjic.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163gyjsqhtm.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163syjrxejb.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163gxcljoiv.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163csdkbwzt.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163busnbxwi.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jgmgzalm.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163disbzfyf.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163btkehzfg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nktewyzw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163tcxwukis.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163goxrpeuy.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ydfujrzf.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tbrizkkh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163rofpyctt.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qvdzmohv.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163zniibfez.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163pnvwsmeo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163usyikjzy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163favulnzu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hjuwvksq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dmvbymnx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163tmdbyrgx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ldjljytj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163acqzoriv.html


<!-- 参考信息 -->