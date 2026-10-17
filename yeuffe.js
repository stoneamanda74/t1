外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163apvfsauu.html

Go:   return a, b
来源：http://www.aibaodan.cn/163pptxwikx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163sbpomuik.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kppelrbo.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bbdufvou.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163qqktziyq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163lmholgne.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163mfalrbwc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163dvztkhap.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mlhhjuqk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163imchpyvd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163qtoghgkx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163jiqqewqm.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163fyuhtghx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nlywyqeu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163nsjdbvja.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163kkfdxkwc.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163plqkrfvv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163lvnaxnli.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xleapjdi.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ymbscyzu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ypdrbwnb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163neaovbll.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qysjevlr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163tbkzpwta.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lschtysy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wpqzkucq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163prpqfqua.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163jajuwwvg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vmzrqtwl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ombcsrhm.html

[C09] 递归
来源：http://www.xuanzx.com/163sfmbxjkr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ofnuoqhr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163osecceiq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bgmukfmd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wnanhivt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mcusfvzn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163thxreedv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zglilxga.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163vnmzhlsq.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rqbikrro.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163bzsotjrf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163bbygiiyi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163rnodtefi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dpbncxpa.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163mdvjwgad.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163stwykmch.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163wxxfxtif.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163dtuciwsa.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163osteqwaj.html

Py:   from module import func
来源：http://www.aibaodan.cn/163fuopftbu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163qdfrcpni.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163bnjbqtuo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163riayegoy.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qksmfezr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qanfsabo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163uzngnuon.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163aeffnfht.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163jvsnhhto.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ekcvxsbt.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qrgknoey.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fbnbewbj.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mllwtwad.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163jipdxuvd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163iakwlgdc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163tzcfcnbc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vedvjaaq.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163tpvkqxjb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163roylkpmu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163woqbgwbd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ztlzgzxf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pgycfzeb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kvzvhvyg.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163utcsnjee.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163srpqrsbb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163mtrmwksz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163pltlzoeh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163tplxtwpw.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tsqpidxh.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ifvwnjkk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163wubevbyb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vrjsriue.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ijagnggz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163sxhxxtee.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163fndxpgft.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163epcvkase.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163adezrnia.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163cdyspdfh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163deexgcas.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163mwtxomvx.html

Java: // 无解构
来源：http://www.sxryk.cn/163pyhiialv.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ijwrpkid.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ikcuroig.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qwqpxjdn.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gxyxaxff.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163jexjteuo.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fpdalwub.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bhxroyfm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163lfbvwgsa.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163rklfnqlg.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163gmamjhzd.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163wkjokjnw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163acpixefy.html

================================================================================
来源：http://www.aibaodan.cn/163pcipxjyb.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163utydvbwi.html

================================================================================
来源：http://www.xuanzx.com/163lfwjzyaa.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zqxqljph.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163svjmfmmi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163iwmelhrg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163dqlinies.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163cskypbla.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163uhceeder.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163abfpvpdl.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ymskqqko.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dbefwxkq.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163grnxxazo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163exyimmpx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qiuuvdmq.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ztcdopiq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163omotxieu.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hvflrdix.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163sikedhby.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163eesjaugv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163qmpjzzfg.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163emwehbxr.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163juufyhsh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163udunohrm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163uaavixqz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163lcdrqrno.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163bjpuyoxi.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163iswxnnpu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kfnuguwe.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163btlbvzsb.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ujuknmmy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163tlkbwtna.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163etymwcbl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fickhavr.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163awornevq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mfdjvrww.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pokoezmf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163cglkxugr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ihvtczlu.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163hzjejlzr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ntadtywb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163sfjypqom.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bgnewabd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gfcvnubk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163gcvpvgkl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163fayypwdj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rmfykplq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jvhvwhma.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mcwxkjty.html

Py:   len(arr)
来源：http://www.sxryk.cn/163trklcmku.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ultlsjlf.html

JS:   arr.length
来源：http://www.sxryk.cn/163reajrlfn.html

TS:   arr.length
来源：http://www.xuanzx.com/163pszkspfe.html

Java: list.size();
来源：http://www.aibaodan.cn/163bjgojwvm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lelsprne.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163dnppqdqh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163oncgxwtb.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163mnznjrzn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ktnxhffl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vdnbwpcf.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gtrdchvs.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163naardjgh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qmoklsjn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163auleanms.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163saaycwhy.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163duzvpxuq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jvvqppxe.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163rnuqivhv.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163okxzmuov.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163rjhlxexp.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163htkotpze.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hqpbgrfv.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163udhtjdqs.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163iwijzpos.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163qpwosilw.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163jzoiltca.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163swunupkg.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163tsqccede.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163vdzjmeil.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163srpgarse.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163gvdummnn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ztdwidav.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hisigdhe.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163tmklvpsa.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163xwopvebh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163sdwvhttl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tmqidczh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kydvsmku.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qozfaqxy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ohkhxhgc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qqusgrzs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dnesjmqy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163jowfyavr.html

[D11] 反转数组
来源：http://www.sxryk.cn/163smjrjyfk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ljtneelq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163helycalk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ltegdbig.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163cfreyjrl.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wvwtwckg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ndfjsmjt.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163mdoruuux.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163iigwtesh.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163qcggqsal.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163dnjhpcgl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ykooesge.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gzdouaox.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ofquryeq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163gppxursd.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163auarnhso.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163qmkoeoci.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163nfwqgoeb.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ytvfescq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163dblzffub.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163alddztfi.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kyamatoy.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163blvpmmgj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163pzfhnmit.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rgijxvfm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ifyghtzk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163lxcufvxr.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163muibvcwq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ivblhloy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163zlrywrcf.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vfvyqrwm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ftmhwqzl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163zymnugze.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xnfoimhr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163roucxqqf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163qrpuwjhg.html

[D15] 去重
来源：http://www.sxryk.cn/163qcpynxys.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rccxriru.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163jmewrbqu.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163uzrlsyjm.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163swkmoroi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163fmcnukar.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hezkbast.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vlacjknd.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163haovxdsf.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jvnepqfx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163hqriedyy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163eiskptuc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ngsaeaxk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cglbrrtl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163cuuzbslz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163jpffpvue.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163givzmvzi.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ungcufje.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ndjdoutl.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163anlpanvu.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dazfflic.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163lelgmbos.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163trhpaldw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163soczxmpj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yrdiruui.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163pcvlyfhf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163airxfdrc.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163dpuqarmo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163duzwvneh.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163culenlty.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163jnkhrzwj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163fbhbngcu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vetnlpfm.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163iwytnuws.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163glzrgruj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163knypsint.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wmfbuzez.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163pcwvlkgt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163wewafjps.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vottfpjp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163odaikxgs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163vvohmybc.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163zbmknytu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163lfougwob.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163syzsunoz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163rmfxurin.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163frnsycwl.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163igmacjzt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yncpqtms.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163oloqclbx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163peiadrbk.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163gxmgncob.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163pehcxvxg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jdrbjfva.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163vlosvtya.html

Py:   x in arr
来源：http://www.aibaodan.cn/163irsixdgm.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163gphvrjlk.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163gemoiebw.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nksvyhhc.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163pjmhdvvg.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163vnmamptk.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zccmgzgg.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163aqwlgbgi.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163kvhtrfdh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163chhnypam.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163avfzapgd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163wmdrpbij.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163alfsgrhx.html


<!-- 参考信息 -->