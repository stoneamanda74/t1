外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163olafklyo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163mmyecmds.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163gndmjkpn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163fkvuazvg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163gpltnpmt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ubfbinqo.html

[C08] 闭包
来源：http://www.sxryk.cn/163kwujhcjs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163lwbiclsq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163olmomhrg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wlutszgb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ppazujzx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163osyfjmsy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163mwzbiwsi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163myvnskwv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163syquakqo.html

[C09] 递归
来源：http://www.sxryk.cn/163vsmtlore.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163tnyzyprm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lihichvg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hixifdua.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163irveebzr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ewiedack.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163dxmoqbvm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163zojidbvy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163flgrrqiu.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163mbrdpuaj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163tyemkjkz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163tsgenlik.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163jtmsfomq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163bkarijru.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163pxdvmfmv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163fsstlolw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163pbglxuji.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163giwzmvex.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ikqwqvdv.html

Py:   from module import func
来源：http://www.xuanzx.com/163ibrxooqn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163idwrnpip.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163pghkwztw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163cmjduglu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163lhvmirbo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163beyzzomr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163speanxcp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163bvtpvcqc.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163aqdjzdfe.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163meelnfbc.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163jylgfaaz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lxvozoqj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163bxmftlnc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163chrwbvyn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163cyxoujxw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163uxvsexzu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163buxntxph.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163hbovtsss.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163tetfdnvf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163usagnkml.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163fghkrrwr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163darasjnj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vxfmoapp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163aeabmzfx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mhnbvthw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ojhubgqr.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163bdgekrrz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ssqthzvt.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163kyvimpji.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qhqewbmk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163vowvibjw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gkyfrnok.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163sbkbbgmr.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bzqftkdr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163edwunioa.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163rdavtsdi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rvjtblui.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163imnmjdpl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163vyduozby.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163knprwtsk.html

Java: // 无解构
来源：http://www.xuanzx.com/163iprhhjvq.html

Go:   // 无解构
来源：http://www.sxryk.cn/163cmmozzou.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bsjdpndy.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163lphjagwa.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163qqornrvk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163iwulhfzg.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zqpscaof.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bakdkinb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qqlclolt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163fcgjrkkl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kqzevcob.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dpgvjuki.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ksgnaark.html

================================================================================
来源：http://www.aibaodan.cn/163cnujzmby.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163mpyrjuod.html

================================================================================
来源：http://www.xuanzx.com/163uqoosaty.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163nomzkzro.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163zatawthu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163dambunel.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xkpfkaya.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163osagaehs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163drnfhzgp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163izclozqp.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mwqnkjwa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163phuqaasi.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163fqscfjmc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163afqggwri.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163phylbjyq.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ipsrmpys.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ezyjszpp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163fehzzcqd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ukelqvfm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163niyzgfsd.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163nudcvmax.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ggxffvfx.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163poqfdxrf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163mahxmtnh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163pqfkmvcu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163grvinwwm.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163mfhuhytl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hqxechbu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163alblqaku.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mazpdzle.html

[D04] 删除元素
来源：http://www.xuanzx.com/163gejsuwud.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163talqptpx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163xsihyvxc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dwjmmybq.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163bjfeenoh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gekhqvti.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163egseigja.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vwueatrm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lzumgfnj.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163apgznlcb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jjhvucva.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zejlzgfq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163jouyqyuu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jilkhnvb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qjrwrkyy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163isgobrtj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rtovhnkl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163gqgkbbyr.html

[D06] 数组长度
来源：http://www.sxryk.cn/163vojgnwnf.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fepfpfbz.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163jrbzijmn.html

JS:   arr.length
来源：http://www.xuanzx.com/163csmrkqde.html

TS:   arr.length
来源：http://www.xuanzx.com/163jlpsvnoh.html

Java: list.size();
来源：http://www.xuanzx.com/163hzpnkcni.html

Go:   len(arr)
来源：http://www.xuanzx.com/163bcufgxwv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163wnjcveqd.html

C#:   list.Count;
来源：http://www.sxryk.cn/163cjocfglx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163blfjdomu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163klcxvlnh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163bbotoxrv.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ibqixykj.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tbaltvdq.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163iogyuixj.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rosvwwcp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163fdgjtugq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163scbhmdni.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ydcjlnbh.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ugxnlijr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163tqmrswpq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163lvzditkv.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ndvpzxkv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163okgppkup.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ajushfrl.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wutiuoqh.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nnwvkmom.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163kmsqagap.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dcdtkfwg.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163lxukyavk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163jdowoqlv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163uzqzhgwa.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ueocgevf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163yojlmedy.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jyyiscss.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163zvxgwrwv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163rnuwlblx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163efczzkqd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163adydumru.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163oiwughoh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pdlsoaqw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jnpagpvf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163kiptxcuu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163eydjnbdg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163clwzklsf.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bynwmfgw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qjuhrdsa.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163kuuftpmg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cyqporom.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163lbmcntxz.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163eugmzhxk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163bbubpgov.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ooekhucn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163zilfqvon.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163datbqpii.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163fzxshvqg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gfkqkzhl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163prgcgrnh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ixwnjazm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163mitntbxw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lmgfxafs.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163zhazzsjo.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163trypmwob.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163mzgruprm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163evrhamlq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163hpqltsyx.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163etrznikr.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hdsmlnuw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163srhlootj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163creodrgk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mzffnhwu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xrhmutnr.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163sshcnmrl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tfiexxif.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dgnccabj.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163oihampjg.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163izodrldo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163syabsnxa.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wpvtdrvv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qnyzcggo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163yjxiidyv.html

[D15] 去重
来源：http://www.xuanzx.com/163njivxmzu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pmtalyku.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ituljpum.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163punetykj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qicpgluk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163rysztweu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163qsuokgjc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163svfqeyfh.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163fpkxmyjh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163lcmgjbet.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163nzwrkmyc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xzacybln.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hmkbgwgh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ynvgpprs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163novxqtth.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mggxvzne.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fqhobghy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163zibmrnxo.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vtkwthre.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163arfjnkqf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ijeuyobt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163gzhxyqyy.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163qbulmifp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163lgdulksm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163drkweila.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163srrqdbfu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163opzagbvm.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ipuivpxo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163kvgoqcbt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163rihwetyh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163rwudaslj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163uevcbkco.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163usmjwmlo.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zmavpxih.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lmwuqdse.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vflirikc.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163giijrjwi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ozsplcsp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163nyogszcy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163pmwlxyue.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kktddgjr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xhnyccce.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163eoykfkrl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163vwanmlib.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163cwkivaud.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tulgxgtx.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163lzdsjzir.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163rjiobmja.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kgyjeoeh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ypjbmijz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163bkhjjmjj.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163sfksadxs.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163loabjtll.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qxjiwskk.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163sbshhxox.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ldummjmw.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163yssujjrq.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qrdlbwuy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pnbegjoe.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163zqhruhkz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163rrhmgssn.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163jtqxjsbc.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fdqalmww.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163pkkupjvw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163kghywccf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163oxbekdzt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ijxjbygp.html

TS:   [...arr];
来源：http://www.sxryk.cn/163mxwfksfd.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163iqatiywo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163cweshplu.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163jhckhgvg.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163dlchnrdw.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163aiuiyskx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163cmmucgyw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163heksceaj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163begwvmeo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ikoyevct.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163tfqfhzkx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bbztphra.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ehhatkwo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jzzhxexw.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163zbmqxiaw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163tdoxjgul.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163rfwcjduv.html


<!-- 参考信息 -->