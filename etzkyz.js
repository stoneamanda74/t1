外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nqzrjpab.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ulmxrefk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163dgrimrbb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163rwaftodn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163nvyyozgu.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163gwuddrgv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163zhxqevua.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ahkaknix.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163tgaoizte.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163kdvolmfg.html

[C08] 闭包
来源：http://www.sxryk.cn/163janmbipj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uaprzxmp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vhxrsqcu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jrzqyzze.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bxnewscq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vjxaewnv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163pirtkaxg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163dbwluoys.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bjfehuey.html

[C09] 递归
来源：http://www.aibaodan.cn/163dispfqaw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163lepxklfj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163czrvlszi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hnlwitzv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nfebgvka.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163udfpcgvj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163hiwkvrhd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163kbiwstvt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163svzhjckb.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163mstewebr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163calmujpf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163fxqatskc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163eywzemmo.html

TS:   同 JS
来源：http://www.xuanzx.com/163hartmuuy.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163faxlwwmn.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163mmzwgwko.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163tbdvhvgu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gpibrrkn.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163fbrwwoyg.html

Py:   from module import func
来源：http://www.sxryk.cn/163yuaczuhp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jctjpgyh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163wkblcoxn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163fvjebthk.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qvwahfcv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163jczyczac.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163tkvkhiop.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163dzazoahx.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163vyspxlso.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163pafmxrjv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163nwlmhbex.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163oiyemjfi.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163czrbazbx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163dtdkbbxc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163tolqsaqu.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163etsryscg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163wxpiwnqi.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163tenhbpng.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163bvcjnhop.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mdtftkqc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163tcvkmbei.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ccihcnlp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hkuukmni.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163qmlbbsse.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gvrfbzpk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dvcjvnbi.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vkytlzmz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163tkioekkr.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163dxeeyrmr.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wocjoauo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163dsmeyprn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163zageplfl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163cknewper.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163tqxhqnaq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163srhoczkn.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ucdywqkl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163tjxyzhur.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163cmjfhkzv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zzmwkykv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ksowmixz.html

Java: // 无解构
来源：http://www.aibaodan.cn/163baexprxz.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163aduvedhh.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163xtkxfqzc.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163zljailmj.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163jzndoswx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163yztbdffi.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163dsvqgkbe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xpxtcead.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163gclyxusd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163utkaznla.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163cbgsblga.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163lzxerolk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wtcaygxd.html

================================================================================
来源：http://www.xuanzx.com/163rpfsnsnu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163kcgavndg.html

================================================================================
来源：http://www.sxryk.cn/163qldxmxrz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163razcibgt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163mdtemqvk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163eelcmprq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163yhgecyeq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163vfowydif.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163jpiqbfds.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163yzwzguoh.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mfcvjuld.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bkewrvgs.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163qnqntwji.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163rhcdenrb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163cjhmitfs.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fyadqgmj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163gvtvlkvz.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163gvyutqqg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163jbndcljs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163wdfdccig.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nnpcypgr.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ttqgkojt.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163uhfszsmi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ufpquuzi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163cowthdaj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ejgecicl.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163dpdzasll.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163mzxuupjp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zpsdospu.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fltoiisy.html

[D04] 删除元素
来源：http://www.sxryk.cn/163yiiywibe.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vfonihor.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163uibqjott.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163gmoegrhu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163yqudxoze.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163prpcyrkn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163blgdggvt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jelvhwqt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163pzvgsuqn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163xbafiobs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wqlzexze.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163eeygqure.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bszeeicz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163gumpelqt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163bxyipwny.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163qrrkjttt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jsbauemm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163owkxulrm.html

[D06] 数组长度
来源：http://www.xuanzx.com/163etiqjirc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163dvmtkpat.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163gpdyspgk.html

JS:   arr.length
来源：http://www.sxryk.cn/163jxbrelqm.html

TS:   arr.length
来源：http://www.aibaodan.cn/163diajfsxr.html

Java: list.size();
来源：http://www.xuanzx.com/163rejehmtz.html

Go:   len(arr)
来源：http://www.xuanzx.com/163nzqbcfwt.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163tlyxpspf.html

C#:   list.Count;
来源：http://www.xuanzx.com/163objavafj.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163knjvblpa.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163winkenti.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163pucananz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163txxpkpii.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vusycpys.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wpkgstqw.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163bngjyjkz.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zrjlbltd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vkdnjgln.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163zuicwpat.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163yutzqdot.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ukfeokxo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mlxecxqi.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fslxzhps.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163xzzgmjpp.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163acizmoqo.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163qhpuzbgl.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163xejiojko.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163jiaqvtin.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bttybnzp.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163pecktkda.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163urqvykef.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163kjsxprff.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163unoeivhc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hwnjzswv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qqnedbei.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163lcgesabn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163onovhjzb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163yqeuhgnp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lvsdfbce.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163olsumwsa.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xhdtgxgm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nyavuuem.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ramfbowj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ldadlgwz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163rlxahegz.html

[D11] 反转数组
来源：http://www.sxryk.cn/163kjlmohuc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163heifxloy.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jpetjcet.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163bzgimzvh.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163xpxqtkmz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163giwussgi.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163dibolzae.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163dndslrfa.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xcunagss.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163tdajwqkl.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kzhythyv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163nbsezxan.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yfwtwvop.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wtrtqxdw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163wfamzfge.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163crogwjif.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163nygsdnzn.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163cnfefufd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mwxisque.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ihnmgexv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163jwsffaqc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163grefkdzl.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ytoqgjir.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lrflamng.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163aqyeldrp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163bvjnclxh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163rcytfrwb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ljvytprx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tykpvvae.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163nczgojka.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pspydkjr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163rwwsxoqc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ooxtssvd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tawumwoe.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163bmfkdybm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163qsnikhfa.html

[D15] 去重
来源：http://www.aibaodan.cn/163igzstczb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163kukxtlwc.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163srqhlcsd.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xignzpyy.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163eigphqxj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jkatsmjf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ysveifbr.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163rbufwvzd.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163payqpahc.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mxbilyae.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163vylowovd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qcnvyumt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163pqqfckuj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iimennuj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163slnaqfgw.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163yidpfaca.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163mvagrxqc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ozyutpzo.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163spsaephz.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163bcsfkahr.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163icwvybvj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163guwttuct.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wvcgznzu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163hxmpalvn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163szepowkq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163sviysnts.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163bzipzmhw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bkyzrkmx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163mgxttyij.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163cigfgoif.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163byapjwaw.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163enmestwo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163pbrvsoey.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163kmkwlikd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163sqmfiuht.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mxtnewhl.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ifhvustd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163rngxlapp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163yoozijnl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ncrutvgf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jitsibgx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163vdrhvieb.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163imkqstcf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zmtycibu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163lnmrgxqc.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jdiilxaq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163hosqybih.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qllumonq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jbxavtdn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nreyjtld.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qivinoyc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163zhknkoal.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163zidkhezt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163whltphwl.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ubqmnpjz.html

Py:   x in arr
来源：http://www.xuanzx.com/163pfqzkgmy.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ggrcyulf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163tkmqqdvi.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pbtpjyff.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163vrnyyiaa.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hosswfdu.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163faprklvs.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ngkwkpcz.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gcfhloaj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163umgjbqxx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163zkxpxsqb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163wluqxmma.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163fwcggmhu.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163prrhotpv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ehnurziu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163dzesognv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163fwvsnjnb.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ciusqvzz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163fiepktqu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rcbigiwq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jtvfosko.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163riufgbtw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163chcbbwdh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nqgqusxk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xwaxxrws.html


<!-- 参考信息 -->