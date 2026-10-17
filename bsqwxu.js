外链999!wailian999！

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mfgkspqf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163kavaduwi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zutcjeaq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ekiypibx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163dofbgjfx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163nidyqiho.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163yhxuciuu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163fygkzwzp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zzzdidbg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ecbqrlqs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163jjvpvjuz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163pcgmrdis.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hwxrpvkh.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163jsgiecjx.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163bfrqodao.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163fxjzafqo.html

C#:   块级作用域
来源：http://www.sxryk.cn/163nsoceims.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163oncdvygd.html

Py:   from module import func
来源：http://www.sxryk.cn/163eazirqvj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ygzkeubv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163guvujrpa.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163tdyrvlcq.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qykhggqk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163grabrpuv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qjvgmoki.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ggkyqads.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mbarrmzh.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ckrngyri.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qqevalki.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pmrkjlhr.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yflbqspi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163irgwkokz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163gwllwuww.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163lhtmkwbg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163dkrsrwdn.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163oolghrvq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163czkhoxhl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kvfaddxy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163oiybixlj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lbafpvez.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zznjjrml.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ijkqiybf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163kwskyzkm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163olrgoryw.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163yacjerpl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bjokgpud.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163cpsmubay.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163frlhpfto.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163tcnciern.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163wyaaajrg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163tpxntxko.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163zbqshlcr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163tlqdeawi.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163zugloxlq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ftkviahz.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vctwrxqo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163eybclumr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163kunnopzv.html

Java: // 无解构
来源：http://www.xuanzx.com/163gmjbxyub.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ikclyxly.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ubmnaxgb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163hsivowll.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ykyxfqxe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rijcuasg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163owebmlsg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163fleqijvs.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163gopslven.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ksypitog.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163xrmuhjbg.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163nstbmvrw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163kctzozgb.html

================================================================================
来源：http://www.aibaodan.cn/163bkrbaxyw.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zcmkgrnj.html

================================================================================
来源：http://www.aibaodan.cn/163vuyutmtk.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163dtbcbhkq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163icqliigq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zpdgsmoa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163aesodxxm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ylmyssaw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163igigsmnv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kofqeyzh.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163fhrsjcyw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vyvlywgl.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163aibfkzuc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163azfwwram.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163zqtakpxo.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163mdlbyziz.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163igazvolz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163zotarztz.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163zvkziihc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163sfeuspnn.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ymrecsqt.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dmrpwapo.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163oswretdi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163mrfgtsnd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163vtprxium.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163tlsaljyi.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163njrvszsr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163tycwsbke.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jwxogiyx.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163dwbjrhag.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163aasjpqxu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163cqgsdigs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163mjoqiqjv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163alcbpsht.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163milcfwxp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163covojquo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fwjtxbjz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qtowkryf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163dozjvqip.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163uefxifjy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rzjzdamz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ludnqius.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ymbfyogm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163wizlsftb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163zahuhdmg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163gdxkakts.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tymopkps.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163agzbseub.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163tyiveqvy.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163usrwlopx.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163bkexqaqa.html

JS:   arr.length
来源：http://www.sxryk.cn/163wccihazx.html

TS:   arr.length
来源：http://www.xuanzx.com/163wnuhspbi.html

Java: list.size();
来源：http://www.xuanzx.com/163tscllfrr.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163edqoakxx.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163eosyszcy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163jbbbgpqt.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163oasuvqzy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163zmrtrbkm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163utvetnym.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qrajedpc.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ytngwlpc.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163scqukdaw.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163dbhvxlbd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ucgemdxv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163wvvwtnlb.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163egodzyxe.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lktxggad.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163keaivvjf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163opcsuqgc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ijcmlqtn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163qaktymyn.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kwxbjthi.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ecpxiups.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163oltayrld.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163kmgdxhqv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163blxbxgtl.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163bxuhqesf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163kjuprtoi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163xiokvkwg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163xkotrbnn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163sdqdrwzn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gidfphqp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163nsjtrhwx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zmpsvauu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163otoalpzn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163uuooiuio.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zrklbwfz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rvbphumx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ontnklhg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163acsrfckd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vfegtyjk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163uelhxzgk.html

[D11] 反转数组
来源：http://www.sxryk.cn/163qeavvszb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163hynukana.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163khdtsrbo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163hznuhaad.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ypfpgcns.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ndlsumym.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163mkxznhgz.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163gpokxbxe.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163cfuckocc.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163obeirlyb.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163bioewugm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jzfinjuh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rnywobmr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rbcvxwvo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hevlmpvo.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163aatxsbhu.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163weqdfypk.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163tsxwlzaq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163sjvprjmw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163iioiibgx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163vqicopaw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ecvlefpv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pydsgbxa.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163pgjcylod.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rwzqwhnx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163iaplrcqc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163jqigwrfr.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kisvybwm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163phqbswiq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163eexnkefy.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jkwbkkot.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163uzwfqooe.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163oupwljii.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163knkftqxq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163osddxsac.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163qdpunivw.html

[D15] 去重
来源：http://www.aibaodan.cn/163xmgvsjox.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163upfhrtpe.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163xtfassyj.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163lfapwzwv.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vnssnnss.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fzkgwkea.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ekercrvu.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zxuysfaz.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163beffjmez.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163aylfkblo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163takmzfcp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163opevwrrj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163votugubs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nuhwabmi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ggbzecvs.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ayoomlkq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163gnmtdbfe.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ndzwktxw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rdxhzose.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163rmprcwtm.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163sufsmqzi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ltgikxsa.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ilbyuveg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163fssytilj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163skjvlqzr.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163crupzcla.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jkhesyhq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mrpumspe.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163kchxrucd.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lqndvoav.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163qbnjheyv.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163lihjcbkn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163lvlgcfea.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xvaqzyey.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163hfwxjzeo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163yzimsrlp.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163msccpdqq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163tcpfdjml.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ynouhmxr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ihjrtvbk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163staermpk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163cqyheqtd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163aotxlqjv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163uiwfvjnu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163jsepdyzu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163kuvuyksc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163gstpkoqo.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163emxmjwpf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wtetxxdc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uycksryj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163artrmoxv.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163jzhypnyx.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hqqdyvra.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163enpjqkwh.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163yocjsnqa.html

Py:   x in arr
来源：http://www.sxryk.cn/163mrpwrsxe.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fcvdkbhc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163piceivbv.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qxfkjako.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163qcmssonz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163cdlbsohb.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163zjxatpxl.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zmiotevr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163gmboxtur.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163kndfyzfa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wwjkmzmm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163swxxmqgo.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fakqnnwz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ziceenoq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163kndamgwb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163dovkohzr.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163iptyzfbs.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mlibitkv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163aterkrmr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163xutctvdp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zkgaxxvn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ktpvmpsy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163tducytek.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rohdjmaq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163qcxicjfv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163oncizkwu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163cmnzpead.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163pvzscxvx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163oysvlyim.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163crjwravv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163zndhucbg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163biccfyke.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163chczztor.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163hxofjspx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163rjpxugso.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163zotomcye.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163frcyzwqq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fvnutpzx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163egyagaoj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vvofwzsu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163beieiooe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163lywjvvqd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163pujmlvoa.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163wytwybwa.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kyrwgwoe.html


<!-- 参考信息 -->