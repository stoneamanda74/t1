外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ymrdxkdk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tbaukfnt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hprcywok.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163gnnpiqcf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163dhceuojq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qjbnszoz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nxirtkqm.html

[C09] 递归
来源：http://www.xuanzx.com/163lzscvvxq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163gjvuaskw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163jnyuecqn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163duayglee.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163pdosqbsw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mcsbvujs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163iyrrsarm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163egcnmdqp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163gvqnablg.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jutyhgdj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hkddmhbl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163revwseqr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163devjueus.html

TS:   同 JS
来源：http://www.xuanzx.com/163owyggxqs.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163tfgbdzlw.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163prowpbat.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dibevzty.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ytauhsds.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vphzjljm.html

Py:   from module import func
来源：http://www.sxryk.cn/163wdhfhxxn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163zdoteiba.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163kinckgcb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qqbafnsg.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163fngodxor.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ezeypqyw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163tpuktjtx.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163asevrgdy.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163koidniwh.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163nerpfpth.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163auwdkbtp.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163npcyqdpo.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xqbjstqu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wruhvqsc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163xcfxxswk.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zpncsfaq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ebfepxqy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163cvzqdyop.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ktnzigmg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kxyrpvzw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163kruhuefl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zztsiedr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lgrkejyr.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163wjobabir.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ehitzaap.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163iacywamy.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163tpjbikno.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163udxzbhgt.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xhekmsfg.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163fiayibpw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ccrbqyzf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jmqguanc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163nnkvsjgz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ntiwilwh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163msebdayg.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kzpoopbd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163lcfuwsnn.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vueruowh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ntsotpfo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163fvdsnvlm.html

Java: // 无解构
来源：http://www.xuanzx.com/163auscrzue.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ehdjtqdc.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163mlkxoztv.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ntguelnn.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163jfroufpb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163pfikghvc.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163yjrtxdzu.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jqiorjzf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163gfwbczus.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163rudxqobh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163brbwxjgf.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163bduetrdh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163zwbmqbap.html

================================================================================
来源：http://www.aibaodan.cn/163qpcnxlcy.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163abljbhmo.html

================================================================================
来源：http://www.xuanzx.com/163lyrqqysf.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163wkblzdus.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hbkaorqr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163toliubqa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163aiajbsew.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163kexeaxdy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163gjadaoer.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163cruoarve.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163kznodcht.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qeylpurd.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163rppzajtg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163lbplbneb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163uzmbhkuo.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163zpwebqlx.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zxhbegqo.html

Java: list.add(4);
来源：http://www.xuanzx.com/163muljslsr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163wjcubfta.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163smawwdzv.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ggpaxcqk.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163radlnxpe.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163oriezedb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163gfjqvsxh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jiiwhwkq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163mkyhzplv.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vdizmqbo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163rjwuzott.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163yvejhspu.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163obbnlnhs.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163dkqdxtzf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jpbvtqnu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163omepynxx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163imrdvrwh.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163apjxswua.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163webbnomj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163bhatuqen.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163fasuzjhc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163qouwcgep.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163qpcgyeme.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cldziaxf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xpzotlzf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163iqhqpzec.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163cubwdajs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163grwhxrjh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tinjcdxh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xgndktcw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mdvdlsek.html

[D06] 数组长度
来源：http://www.sxryk.cn/163iglvuidi.html

Py:   len(arr)
来源：http://www.sxryk.cn/163yamlwijw.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163vjcuoehx.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xtdlickq.html

TS:   arr.length
来源：http://www.sxryk.cn/163eovnhypa.html

Java: list.size();
来源：http://www.xuanzx.com/163iezhrdrb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ffadgnxd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ynppdldw.html

C#:   list.Count;
来源：http://www.xuanzx.com/163lplaevnt.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nmbotxwk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163dofuvjte.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163etzwlcsl.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163oibzusmz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uzjdkwvu.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163asjqkatk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163gsupxvtd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xsxrsmem.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163avriqgtr.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163gyrbvfbi.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163hanjguif.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163vgkbempe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163emhdepox.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163rhybrohf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vjdgkyql.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vcugndmv.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163mzgudygb.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163akkxdayj.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163feoeruuo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nfsbuham.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163rdsphvdf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163psknouaq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163fjdubmye.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163lurtreyn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163affghtlg.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dofilnev.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163buxlybtv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163rlcyhvpd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163pghbvpmq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qwdebeai.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rksszpdg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wuekqxgo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163qdunlgys.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hfammptw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163mwwywjni.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163kgvbhnnf.html

[D11] 反转数组
来源：http://www.sxryk.cn/163masgqwlh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ovpjnxja.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ubywqpve.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163zkkbylzv.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163elpuktjx.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163okwcbptx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163vxbbarnp.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kalafqwj.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163gmbpoacp.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163rzgpyfjz.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163roqeonvl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163jdtdbybv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kxtufwee.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ouhlrimh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163psyodmtg.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163yxtmnceg.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163hesymwqq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163itlcimcd.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xdhkcdxl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ekyseita.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kjojwhfw.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bszdxazi.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ztsunano.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163oltqvuwd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163hqimzkuz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mhddhzgz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163wlkfcmfa.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163bfauwizg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163eyvnwtzt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dzdfrwug.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gbgktifi.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dbmxjoia.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163hahngtkt.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vknvnfzf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163pfacbzlt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163qbisrjgi.html

[D15] 去重
来源：http://www.sxryk.cn/163dceufoxa.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rvwcdnwm.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ejgpupuj.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zzmoayhv.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163akoppdgp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163xsuvepsj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qgdejqnl.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dctntkbk.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163uajfnpfg.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vujykkdv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qxinaqrw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hqmqnaqf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lxtbtcpw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163dhjxlhyt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163jkkxpqjs.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163aoqporgn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163xxhozlkr.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163hxdjskdy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163thhwglcd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hnkpjzga.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163smznzahg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163rmgnfxfm.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163koolofhc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ccpqvgou.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wolaeuwz.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163bldxhstq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zhguyice.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163uapmlwoc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ftiambuy.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163iezoajwu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163sxhnkths.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163nmgessad.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163sgqzswnr.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163mpldrqiv.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163wvlzgrsl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tfbvcdgb.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gldwpvig.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163cfcjbray.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163hvwtakca.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163dgcpmbyf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163paftbxto.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rljphlhh.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xisichzn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163pghtpwjg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ljennwnm.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163utylmapp.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163evbfdlny.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163gfolzwwd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gcjhdoha.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ircnnvci.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163kduphtpl.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163sgbdvqwb.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163xjhvwyxg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lnvpvgif.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163sotfiksr.html

Py:   x in arr
来源：http://www.sxryk.cn/163jyriiptx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163wjvewjah.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yqnfqsgq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163dmqkmuin.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wwgenlty.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vcqdvsjt.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163xvwnfybb.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163bzbbgdgo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zshfhyzc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nvywfgsq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163paqmmizt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163smzabtty.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jpngbmkr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ffyzlysn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ffviijnl.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163mwxansox.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163xlshbsfx.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163smrrqrvm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163wgncfjyl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163dlupmcpp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163sswqvonj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dtcnsfzc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163dbedunrh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163msppkgao.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163twwwtowx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163mswimymt.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163otdreagk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ugroglhr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163yfpacunu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vjyshccy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ybafdzhz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163dluwiqun.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163kwlmdyhf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163tznmowbb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163aaxpycws.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163kgdjcyft.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163trifbiam.html


<!-- 参考信息 -->