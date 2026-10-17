外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163azpauies.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163mruvvqsb.html

[C08] 闭包
来源：http://www.xuanzx.com/163ltvejeba.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gqndzblr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163rbmyimra.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uwvqfycm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163oodzfqyu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wcijqhxk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163gaovyskf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ecsghfef.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lnlhizbd.html

[C09] 递归
来源：http://www.xuanzx.com/163gdmqofhs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rkhlosom.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ipqctahn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163owvphtop.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ifsrdefq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163vjlcmhlv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163tpbrvdyw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163blbzywsw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163qvszgcym.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163luzzmwjo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xgjcxcqf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163kideayts.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163pbofmfsp.html

TS:   同 JS
来源：http://www.xuanzx.com/163csgjniws.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zgnwjptj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hwnophwj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hfzzvtfv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ypvqqqsn.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163vbrrmnbs.html

Py:   from module import func
来源：http://www.sxryk.cn/163causzfpe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163dcjakzrc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zwmvuwzy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ajjgngaz.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163mugtywje.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163igxzobyj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163rbfmbzkb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163cuhicwpx.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163whptlwez.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163pueondvo.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xkmfkqvi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xrsfhppu.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163anehqcpc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163myumskhx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gtxjtzej.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163hbqfpbft.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ofxfvpmg.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163gcheezco.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163gmpaelnu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bbtjcddg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163tmrftffk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ppulwdvb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163turxodai.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ulgefbhd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163cmwotbdh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163uespxqan.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163skzhswal.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163eeizsush.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fmmjeoqq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163qjhkzzsu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163xsgobpgz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163mysvzkrg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rdlqodbm.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163cqkzvtqm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163yifttrmj.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163tgnwacit.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pydmenek.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163vzuiawnj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163dwcyhcel.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163iacvwgsp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163lhvdzsmm.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163eegqvckk.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163nnkdzwex.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163wcysiwmv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163kntmnwkz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xawnbpgm.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ttzhqwny.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163vwldkkmt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163geosjxox.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163uosktltc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163eandmkzy.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ebkazwpw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163fcowclcq.html

================================================================================
来源：http://www.xuanzx.com/163mdcpebcn.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163trsjfhnk.html

================================================================================
来源：http://www.sxryk.cn/163cteuezao.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rqrgxfsx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163nuwpjglm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163vzzntxjn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163wygqcoei.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vgfjhjqs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fuxnvhft.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163tuafpwed.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mtbhfugi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rupvdzwg.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163xxtcjseb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163vnqbclad.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ooxlegxb.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163wxbfdauu.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ifwtosxn.html

Java: list.add(4);
来源：http://www.xuanzx.com/163guelwrvv.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163fckoddfa.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wnnfunbd.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163dpkviyro.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163bepjbcbc.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163iabhxefy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163yirlbgqv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163yhxpsuxa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163uwueolba.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163dvytlckd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163odpngdse.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163eotgtjfq.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163dwveaslx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163umqymvzn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163qplhoxao.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163mmoahtdq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163zlijkxap.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vmsqtevp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fhwocxmi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pbdkvfng.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163nahhqalc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163iwhgctzb.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163jtvhpxvm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vzywfsou.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163bdmzhfhc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vnxhmqim.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163nophhpdm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qjaauulv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ccezujtj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vaimjdgc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zsbwjazt.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ntqfleyi.html

Py:   len(arr)
来源：http://www.xuanzx.com/163onyobaub.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163iksxvepk.html

JS:   arr.length
来源：http://www.sxryk.cn/163owciaors.html

TS:   arr.length
来源：http://www.aibaodan.cn/163myxrkadj.html

Java: list.size();
来源：http://www.aibaodan.cn/163yfqnqznb.html

Go:   len(arr)
来源：http://www.sxryk.cn/163axivwzwr.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ozsztagm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163hrtxqsgq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ckuucltq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163wanfrgsw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163pcxlwfgu.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fvkwmohk.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uvepgdof.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163higxoxwd.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163sfjwjcla.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163beyfgbju.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163kobvgtby.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163sfllbdzs.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qdhruzdn.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163famgsqhq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jpzkotpg.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163cbigcxqo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mrnttfxs.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163uzsmhxuv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163donvprqt.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163axbjplyh.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163quqdanaq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tztxtqjq.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163kmoswolz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163stzmnuli.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163cpaqmfdc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qqrgywtv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163iiiaqszf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vieiiidm.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163glsnixue.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163qcnewvkm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163wmaxvqky.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jlkybkus.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mdzpaiaw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qskspljg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163lalsafqs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163eqczdsjj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163hkxjpisu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163tqgsrmho.html

[D11] 反转数组
来源：http://www.xuanzx.com/163kwumfpjk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163embxzynk.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163tmohpzrp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qrvgzoma.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ltrfwqtd.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mtdogmlq.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163meepquyc.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163vkybxsfp.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163knxudxgc.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163zvwkamlw.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163xvlrevcf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163yumqdqnh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tfgxpjfr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pxcvcfrw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ccjzmdci.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vvlzjatd.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163xdcpospm.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163yzbijpie.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163gpeicgbq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163jvpmisip.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xaqhlfoz.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163afpokfqv.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163igammkxb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163dknozlva.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ijkhknpc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163jawmmvnc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163heayxtlp.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163okyfjawj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163gbqxsbmg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xidkpiva.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ranhtjyz.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tbyitecd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163waipwxbh.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163henpbvid.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ebgdddhz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163uapnxvxo.html

[D15] 去重
来源：http://www.sxryk.cn/163lreulsew.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163srivqgca.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163iexyfkta.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xhigyltu.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mxmubeyl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163cmdrlhjn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pxfwylsv.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163mmldvuor.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wnkzyzsh.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163seisjcxb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163bbaytxfu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163trpkovgq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qyavrsxe.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jadyjxjo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lbpfsxcn.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163mxbblkxx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163gjynacju.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163cxpdjrly.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163cclfnbwi.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jsabfalq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163awdehcgv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163iufecrha.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163nqgvybxx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163smagpjmz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163fpyvaedy.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ngkyloyz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tshaxhvq.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163cthgfgir.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163mdolkewj.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163yfqbdtke.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163onpwbodh.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163berrhvsj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163cvvvjhub.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163eqejomua.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163egtmnlns.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jfwjyfqb.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zfhvmmct.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qzflyxjn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ughggkdz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163bctztcwl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163szfgxvkq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mdgaczal.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163egtifqqx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ykdqfwqz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163rtqaholu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ywhipegr.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163dzgbgsgu.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163bpfkfptd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163queuotng.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yfjkklaw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163hivnwrpa.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163voqoznxw.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163vjnqknxf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163znhndxdp.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163wfawfgut.html

Py:   x in arr
来源：http://www.xuanzx.com/163uneohyrj.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163tgsvtpfr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jigkjynf.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nrnnebxj.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163outimqag.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163yfloptgj.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163otsucwhw.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fpgfaong.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163wwpkkvtq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163sbnnhffo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pbmpkvyj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ibpfupjg.html

TS:   [...arr];
来源：http://www.sxryk.cn/163yoygzunz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163njgwiyhu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163oqwpjbvi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zreckiyy.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nzwjdlhs.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163bckykftw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163pcmstmuu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163kppnrmqe.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rnbuxvit.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bwawpikd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163exgpmzhm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163buhwecty.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ipncaplg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163eddklqxh.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163mcmbtlat.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ewjmmiee.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163pvrkaxff.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gaxllcxw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163lewhojqy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hzzuhzip.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163alinqaxc.html


<!-- 参考信息 -->