外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163pgukpbyx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163vwfokebm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zmolnacc.html

[C09] 递归
来源：http://www.sxryk.cn/163crihtqtd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zwptvfol.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dsdilhcx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zajvrfyg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bxxfnxmq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zjdklyqn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ubgwirpy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163olpxcbgw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xudpfkwu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lgeyuegt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163muqnyzwq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xjbyldjr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163dpqfftlh.html

TS:   同 JS
来源：http://www.sxryk.cn/163gsgmatwe.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163kuhrtzok.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vxxbkzre.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163dslduukb.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163tkupsfwr.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163scflwdhq.html

Py:   from module import func
来源：http://www.aibaodan.cn/163xsawpohl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163mzekkckg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163khfvccva.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163hepltexs.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wbckvssl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163dotucoxn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163rrwgvgwp.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163nfvbzkiw.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163csknxnqa.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163fstnozfe.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fatdphcj.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hhfqphaf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163awxcbfqp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163dbrmhduw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ddzqdrzx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163oydonhhi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163gwnpjsdn.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163imiwjozm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163qkkiwgtl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nktfzeiv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vlytrkcs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jqnmfibb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zqyobwlm.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163avmctnfh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163wiwdgwek.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ezumabfn.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163hwbmcsuy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163swegjptq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163qnjqncna.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163nuxswnwg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163zczdcohb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vkiqibmx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163uiqnnnif.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ygpohfsy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qnqdxgev.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163bpptoxka.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163oxyynnap.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ilefzdec.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163uvtdfeub.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163oqoloztn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163akzduigu.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ybcdqztq.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vkouegin.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163gxpdkcst.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ozsfanld.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163hlbgumkz.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163cyvoxrfh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163pnqzsxwc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qxtkxfcb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nsupdgfd.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xufyyjuj.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163fsxiywcm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163jpskbgxd.html

================================================================================
来源：http://www.xuanzx.com/163ntrturgb.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163qpwsiyep.html

================================================================================
来源：http://www.xuanzx.com/163paxycjsw.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163aoqdzdix.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163lftpyqyx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163yzzttcwd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163djjpxeqm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163dbhbyhzl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ckiiwqnj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163egmzfuzx.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163lgeufcjt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163fykbngbq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163rprlgsjn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163yrbemzor.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163jsuuonjy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zasdrcjb.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163sgewrzmu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tbwaesfy.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rnmyobtw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163tlosnwhp.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163lhqnubje.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rlsmehad.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dywtwlib.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gkrgmxum.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163knxolpsx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163fbyfeyjj.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163wcpaoynn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163mjqthztj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jgzwfiuy.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163oizanhha.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163urudnazy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rvrpiyno.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163blkfnccf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163saymzslv.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163elaokqmt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ufckongg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163knwwseeq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163cchwvnbq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163twtczypf.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xeribknt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163isqfydjs.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gnooqxcn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163vxtsjgvx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tcmnbmbw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163cnqotswd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163bzcljhga.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163emcedigq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163oiqwrjnw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163oxjnunjf.html

Py:   len(arr)
来源：http://www.sxryk.cn/163tmflwgau.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163dsprytpi.html

JS:   arr.length
来源：http://www.sxryk.cn/163kfcgagrz.html

TS:   arr.length
来源：http://www.sxryk.cn/163gequvxuh.html

Java: list.size();
来源：http://www.aibaodan.cn/163fixvlkuh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163vmiqtwfa.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163oitqbffc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163udwriygn.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ohufmvjm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163cypofwsk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ldgihkkn.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dphuabyy.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163equjyaiu.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nafstudt.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ieeagqdm.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163orgjfffx.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163tbejezsn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ergwikck.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zsycvjxr.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kqjkvuwc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163zmylwxij.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163oyzlcows.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nhlbviky.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163lvhyujbv.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163hiomoodk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163zkfobihf.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163sdnnevao.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fmxqwqca.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ngneucto.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hiubvcnw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163cjimuprn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163uitxvnkb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ntarpavs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163thpgochm.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163xjwfatqk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dtnuokwc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163qhavkeuo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gmwcaufu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163diyrgpxn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163oisslvwd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163rzvljnry.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163dzvwqpam.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163bbyluvfc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163yquminuw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163kemskwjt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163erbiscmo.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163xvekiard.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ndbrryfo.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wkeezyrq.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163jvocmgiw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163oqtrrhkt.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163jscphbba.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163vcyhkqdg.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163drtrkjoh.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163fftomsex.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163bjfgliqk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xjkljbey.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ipxnwyem.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163dlndqgcp.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tcymqrzi.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163pwhpskft.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163dglhubss.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163uubptybh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163lagircsa.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xkmtggdq.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xbeavmwf.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vsfstuhp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163sjbbrghj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163imaptiej.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163qpzuijya.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163oqdwlczo.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zyrksvub.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163fjbnorag.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ipikegvy.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hsfdlvkc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hpavnepx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163islbupdo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vjbwhpjt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163mugqanpu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163xllpwxwb.html

[D15] 去重
来源：http://www.sxryk.cn/163wvgazswx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gpgdwvtg.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gtittgpj.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ucufljli.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mfarepin.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163cfajigbm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163hjxtkimp.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gnbnmmog.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163nwocomnk.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163xxotfcox.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jaeqqpmj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163gnwksquo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lxiwussp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tukzadpt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lixssfmp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mkfethaj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ccjdxbdl.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dawvaiix.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163krlzijkx.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163nddecxzk.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163cjszqqbe.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ekeagyda.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tsuqxrxm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163glgfqkrd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163knjdafhn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163pnlcregw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ballrino.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qngbnwyr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163upqvlxjg.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163wznymvoz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163qpdywpfy.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163hllvzvzi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bnamvpfo.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163emlhovfa.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163knybrvno.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163goggseft.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163irhhhakj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163vagzocgg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163uhktstbw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163sbxcvxgy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wknprimo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fmdxvraj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lkelwrie.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163tdrtqskq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163nfgewfpf.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163pdphclfs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163xiasvjaf.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163dhhnzzav.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xjfodaco.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hkfmvlss.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163svshwyup.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jsqpmeoe.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163tnexcoda.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163pdbficob.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163rtwomifd.html

Py:   x in arr
来源：http://www.sxryk.cn/163fwbhkibv.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163nednjvcl.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163sggobewt.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bitgrjkw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163vgudmpvn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163bqyrutek.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163krpezhvy.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163juxepqtq.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163liusdmvn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163uxolebau.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wdjonjtn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163jbzawuad.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ifihrwqy.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163rulvebcj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163yvuasrsq.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163plmenkkk.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163kclufmva.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163fxfrtxsz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163cjaalwsl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163mdzjmqbj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ntrxrkdn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ljqpgavf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163iaujcwko.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163epzfrgwt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163talekbcc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163sgcxtsuy.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163fjayxhnw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163zqmrwqcu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xsgsyskd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163qujocggc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wohmrkxd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163zlydjwuw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163mciqzkvd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ahhrcilo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163fxjmpgin.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163nscxofck.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163czotsxeh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hoteifun.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ccpmbdfn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163sppwfiok.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163htlirvjw.html


<!-- 参考信息 -->