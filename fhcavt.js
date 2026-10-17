外链999!wailian999！

[C10] 变量作用域
来源：http://www.xuanzx.com/163ebqznovs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ugbizrzp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wdzyglqj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163nffrwnmy.html

TS:   同 JS
来源：http://www.sxryk.cn/163aftrecii.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qqmuykfo.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163npozmnyo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163isocpywf.html

C#:   块级作用域
来源：http://www.sxryk.cn/163tcrgaizs.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qdykamjp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163lsufyuhe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163tgriryjf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163szsiofal.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163xuwvhmms.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163uvucxgjx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163hevtxxvc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163fbllixgx.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163lvefudst.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163joezdaxe.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xpgkotus.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163uaofwkax.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hpbsjdkp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xrqtykpe.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gwcnwign.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163wbjwuhvj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jifbjjls.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ortyouah.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163lbqinbsg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163vtwmfmwv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wghctmtm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163livexocq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mqfrhwah.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hcvanlsc.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163acmxkilh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163kqzmrbns.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163migwvapw.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163tvzcftgc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vlfrrvnv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163dhkxexdk.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163kvhxecpl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163vstzcgrn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163wvhfoqhh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163fmkoguiu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163amnjxvne.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dudmrntg.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ofusvinx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163dgyhprza.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163msqhnsbz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163cotzobon.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163yszdzdta.html

Java: // 无解构
来源：http://www.xuanzx.com/163tiayabwm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163hfjtuenu.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zuqasvqs.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163udjkzlvf.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163zwlkycig.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163chacxqni.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jfjhzdit.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163nppiyrio.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163shwiyyss.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163knrajwco.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163wylzwqaq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163szfddipc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163qwdmwtis.html

================================================================================
来源：http://www.xuanzx.com/163harwpqqm.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163kbgbfkbv.html

================================================================================
来源：http://www.aibaodan.cn/163ufkjwkll.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163jpmulbad.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163nnzjghhi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163nxmzrmkn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163azkefgvo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163evhiguyh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163qulntkxp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tcloielb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jnghxuiw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163uoxcimxq.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163wnoyltfw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163lzwzjuxz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163cegeznoa.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gqfacoba.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163mhmvgdog.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tyrdnpfg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163gafztkcr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163uuzhzeyb.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163kiulrqfm.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163oxjooiyp.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163mtvzxmmi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163zzhrncwg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163xwfvzqqz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163kaezqtix.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163llrivuva.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163rardadvm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163dhracgli.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163zrubhpry.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vqktaanp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163abrjvopn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wrrpvbxl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163prrtalni.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163zfizpcah.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vscujlla.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163jiairhvu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lpmxmtqz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fhnosjjl.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163jihlmcfg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xdjudcuh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163hwhxmaax.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163fiamzxtr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163yvoajsgk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xuriwzxk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dclaxvpc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rpgxzbil.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163gwfcxzyb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163lhrskkfx.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163uuahofnp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qpxjdalm.html

JS:   arr.length
来源：http://www.sxryk.cn/163ixbjkurp.html

TS:   arr.length
来源：http://www.sxryk.cn/163putppylo.html

Java: list.size();
来源：http://www.sxryk.cn/163upqqhmaj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bacfprkk.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fejfszze.html

C#:   list.Count;
来源：http://www.sxryk.cn/163onqcebzi.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kqawdkqx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163quwbzdyf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dfiigsex.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kwtnadrc.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mmbkqbpc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xkpzlppe.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jyimcnxv.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163bvpukwiv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jssygtya.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ekkvjyhj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163pkxtuyet.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xcfyvihw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163bvlnwack.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163xgcffltk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pntwcvnk.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bsduchxn.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zpugfiea.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163jcqaxpxv.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163vyjdfkit.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xfcaqbdl.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163wxgfuarb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163iexgknwp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163qgkiuyyz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hjseqnbx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163bkarlyyq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ffbxxesd.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ddbknrxu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163zrcgxyae.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163jdyjrlcd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wmvmgfyr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yfsubkdt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wxevysbr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163lsnycwra.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ybuvgtbm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ayfukvon.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gcwbbmdt.html

[D11] 反转数组
来源：http://www.xuanzx.com/163qflmoicf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ofvtakoj.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163sicfymqp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ivlmpjui.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ovaitfib.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ifjdfgch.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ziyjitzu.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163qlomzoey.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gejtrefo.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163aqajgpxa.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mrpszssg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jkboqlnr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163huvshajr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ensfpkie.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163cppnfohu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163xpotvqfg.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163tvqxrhya.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163qsifkuva.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ilvzmztv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163evthxjnj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163tqhlwkas.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xanmstwx.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163suhxluyu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163jynopqlf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163fukqgeoe.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163jaoaooyr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dmvdhlht.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163oypkhtlj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163zdexelyv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ysekfvit.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jqjvgtja.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sbmqopik.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163eernydtc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rgggeryr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163hcfwcmxs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163szwttjqr.html

[D15] 去重
来源：http://www.xuanzx.com/163ojlcqsxx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cssljgof.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163etvlvdcu.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wpuckvmr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163alrqnksk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163cgiiibea.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mrwknwht.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163rlkyiscv.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163unwocaai.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163atfqsjjg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jsmyoctm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xwhuilvh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163blrnvtwg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qnnyefqa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lmtalkzz.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163dqcaaenz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163unqhpppj.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163czipslfn.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163zzycicgg.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163wzfduzav.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163zibreppi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163mcjbctkh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163erlsldqu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163mbjbuoax.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163hcvnnqqx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163yafapmfk.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163gboacrnd.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ekovppxl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xkqbdugv.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163beoekhrt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163izdxrgdj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163cbralwqi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ldsouxkt.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163uzcpxrso.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163emglntnr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163iazpwvfj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163tesgcnge.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163slywypbv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163qfvyplqs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163dmjxujfm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163peigvnou.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163gjcshows.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xpvvgguq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163qgkkffru.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bwoetpqw.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163kcjfcpwi.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163knbhtlan.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163nsxgdsmi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bwwbafwi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rlxpbvtu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163wqwvptnk.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ejyqcljf.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163czcbbslh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163udndqinq.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zzqjdmup.html

Py:   x in arr
来源：http://www.xuanzx.com/163sgxitswv.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163qmlexoer.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163gojppism.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163dslwsksy.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163woyozyre.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hcodyixp.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163uhnvulmj.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163vbgfhmxu.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163bkfcqevq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163fduuskwf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163cdgkakos.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ipppceyr.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ledowdsd.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163xjzksxud.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mniwbeai.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163imojiojk.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163fjroahfq.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163wejqjbpk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bpopkxpx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163hbwmkufk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ylazgypb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zrjenqem.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ogxnqbjb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163gvzkgkkl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163yalugoac.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qxmsgwkp.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163msplreoe.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ieggzurd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163gnavammi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wkryxtrx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163agignqru.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mcofvyec.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ptxwiqxp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vjfnzitj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163zxtrmjge.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ttlgfacb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ulntstiw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163hyvzbyop.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163evkcprdk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163psfbnldt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163zxoiikpz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fwwhuaim.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xearrjjs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163hphjzpvw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163kdrqnujy.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163tkowatmn.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163uoagffxc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163aszjoxwk.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163zvufvwrb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163tlhkbctu.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ezfqntkt.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163cgcdleyt.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163knqiagoi.html


<!-- 参考信息 -->