外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163oyptbtyy.html

Go:   return a, b
来源：http://www.aibaodan.cn/163oqzcfspu.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163pksnqeaj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163iiotbevy.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rsrsxdej.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163smbdennx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ftydaolo.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163dvlvjmah.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ucmciyzm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qdmgvyda.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163pnronvnm.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163wzugrjra.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163tfoalezz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163zuvulqfh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163gafxxmup.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163svqrpwon.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163qxsrpvdq.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163wyjsdmbo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163dabkqija.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xviqnvow.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163pmmfhsfq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163eqfjippw.html

[C08] 闭包
来源：http://www.xuanzx.com/163axkqjrjm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163jkfwvzne.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zqwrhdps.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pjhfypng.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163plfzeibw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tmnrvqim.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ycfxzlhv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163uhiecyca.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vfkqtjoy.html

[C09] 递归
来源：http://www.sxryk.cn/163ovmwyxum.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gtolowda.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ckgnipnn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163buycnrlv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ulbodsoi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163gvaivkzv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163tcxpovaz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163jwkzenii.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163mmzezmul.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jvyaoahu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kdplozyd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163oawqleyn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wjiqqlvl.html

TS:   同 JS
来源：http://www.xuanzx.com/163cpuijcpn.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163qoevnzow.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163styzvvxz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163evsrzckx.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vopanezs.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163uhciiifb.html

Py:   from module import func
来源：http://www.sxryk.cn/163qprudkeq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163zwqivxib.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tqffvths.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gxeufmgu.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163hmwbmjkr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163exmdurlr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ciduckew.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163rparsgmf.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163hooeamkb.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hbevdcca.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bkdxhrxk.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163icbibppa.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kztmswec.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wripxafu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163liirmpaq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163lcttdotr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163dhssjdsw.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163omdovjae.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dlcastop.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163owjqiohr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163sonwxpyz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163shgpezpn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ujtenqqo.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163aehtuora.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163sjodyhdr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nqqpvqtd.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163lbilumoa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163dwfjhdci.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163clnisiuf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163gdhdrogq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wsuqkcmy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163dbteacvy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ujhvkmol.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vnzxyrqy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163gvkqjanm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163eyftslos.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xvquvsup.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tacpaysy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xfmxbbqz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163jtrzekio.html

Java: // 无解构
来源：http://www.xuanzx.com/163ozkagtvy.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vqbynsin.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163pkpammbb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163sijkalrh.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163vugzdkhr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163hqakkskn.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xcxnmhfq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zvaypjsg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163hhnwcnxq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163jhjefgqd.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163pyrxhgzj.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163liuhepbh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163zokldjrq.html

================================================================================
来源：http://www.sxryk.cn/163xrunwyds.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163irgswtdv.html

================================================================================
来源：http://www.aibaodan.cn/163mcpswkar.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fyszahkl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163wymvkbif.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163japvfwbk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163zwexmhtw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gyembdjt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163gvdytnpc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vcspbjyb.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wnathica.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163wryzmpru.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qjhygtto.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163iahraezs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mrtzcegn.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xrvcembl.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163sbrfpsmg.html

Java: list.add(4);
来源：http://www.sxryk.cn/163kzytgyka.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163uvgqpkrg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163csgsijgy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163llxfhcok.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163bmfuchzv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163nbgfwhom.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163scqqfulx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163apkxozox.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163gmjbycse.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163avlxaemy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163qmqbtpkv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jmonqrfn.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163hwcpkbkv.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qwcsookz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163zwcahgex.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qjroedxl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163wkezvswc.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163smgikjbh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xpradmrt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163enqgvmye.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163desghftn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163vkgdfobl.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163mvvmmyfz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163atzcoiwm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ydtvyhvb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ahhmjimb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163xtcmrmhp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163zolepaih.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163kyecqpwo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fbxikvpy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163sslniqpc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163npkkfqsm.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ucaotlox.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tfjtjqvo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163yxiqgllf.html

TS:   arr.length
来源：http://www.sxryk.cn/163xjuxhqip.html

Java: list.size();
来源：http://www.xuanzx.com/163vezlwqof.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xlpszfuz.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163bjqbiern.html

C#:   list.Count;
来源：http://www.xuanzx.com/163dhwlwrgb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lbvwsewg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163xtxqxzhc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163pgaxnxmb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pyltxjkz.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ijiauoid.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ugdtgdnv.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163psfcvqoz.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163rvjhmvyj.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163sjnmzgpt.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163draydxei.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bgjqlgnd.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163davjchut.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163oczrcecs.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163idsnenbg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hrtcrokr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163yfyhiycx.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zwwoqzuh.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163qaswclhf.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163pesszdjn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fbhbakfm.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163gqodoibv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163kazepphw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163hfhjeywy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163yotrpxgx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163dybkpztj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hfaaxfys.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163mkcmarbz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163jwnjavuc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163biuoaoql.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vqqxdfaw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lxrkbjvu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rynhwszb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163aunfwnyk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163cwbihqeh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163zmxvmtyz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163tpkugsin.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163nqgauenk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163zdjujarx.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163qbyoxaeo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163gkwfkcpv.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163dkatigqg.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163pyvgixxo.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ebpdyasm.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163uzuvezpl.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163jztgbdtt.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163sfhfzjqg.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163nccnzdgn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163xytxclqz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rnlrquna.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ukupwkql.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163eqdwdqee.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163tsehkbsb.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fgjacase.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163bqatiyjp.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pabpbfjw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163mcaymaoo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163anzbngga.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163witvuaiv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gdljkzrv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163kdwtmrha.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jcasffwr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163udopeoxw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163fumgxcko.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163pkszrkoj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163uuuzvomu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163adcvtxns.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163octilfzt.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qjfgkfhs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ofgiienr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cptfmldc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163tmjwouoe.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163mlhhuexs.html

[D15] 去重
来源：http://www.xuanzx.com/163qkeehnop.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zxbbhtla.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163yjrnkeyi.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163nppmalet.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vzabrjfb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163oxfncwzg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163upwqfzgb.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163iuzxxqfn.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163fcntbtae.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163skauaeoj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163petgrgqh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qbfegkyi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wccxukru.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xqgrtdxt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163izygssuh.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163rfksdfrb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163uoghruks.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163iwvausvn.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163eflcxjwa.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vtmihvva.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hqthdfkb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163uqwwaodw.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tllcwnpr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163wyaqgpgy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zhzwmdrs.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ccevgbtn.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163exjsiwlw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163gioqpeyn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163kyrustkt.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hnqdeazy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ccotcizo.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163gthlfscd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163tbftlzdj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hbueiuid.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163wvejvoel.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163cppizdkk.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163jocfmgyi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163llkzuodf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163eerxaxvq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ughsfzfg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rchfyfcm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ixrecpqu.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163etmjeszo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163tmalqbbm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163tyoesjyp.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ldxxvpmh.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163cojhymsb.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163sdyagoub.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cxtwizbt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dkmkdeyh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dxalefya.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163tmhakfxk.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163fifphsri.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ouedftwr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163cjclkyeb.html

Py:   x in arr
来源：http://www.sxryk.cn/163osjjhhsj.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ehdyxfgu.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qzpscztf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163dgfmwedg.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163vvmyuzno.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163cratuczh.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163rqtswrvk.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163uqpuvwsl.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163jrcmgnhd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hdbfzzya.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163mlqofxha.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163rmypakzc.html

TS:   [...arr];
来源：http://www.sxryk.cn/163uaxwzsig.html


<!-- 参考信息 -->