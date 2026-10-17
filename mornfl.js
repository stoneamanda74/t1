外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163vqzwmnzk.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ratkekbi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163kebqvfoj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163moedikzm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xyanebwl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163adcmdkvb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163xfaeyoah.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ecggwkcy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163wpumbsnt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163netvptrl.html

[B07] while 循环
来源：http://www.sxryk.cn/163jtklbuwm.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xfbbierh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163opqwwurb.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mnjtosqk.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163khaqydmy.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iytnxend.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ehabbgyl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163elztjgac.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tnmrxzdx.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rydnczhn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163iznzoewk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ansodxkf.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yiemnnkb.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pzafsjyh.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sjpyclbj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163oraovwbl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ujgqzrmn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ufvkufau.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ciyqtrnt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ndgwtvob.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163royyzcxs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wehwwqaj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xfqbenea.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mudmflsl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163edadlvch.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ibomueyw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jyygvxhg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163tkdeksdn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ydswfhzy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163idgsktyz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163vpeeypqk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163cdzcbryz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163kjmppcgw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163aqftpden.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ffbwoqwj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163gznullgs.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jzjcyuaa.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163nenixwpt.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163whrfjwks.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163irqznmnd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ouzyadhg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xifflwfu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qczlxpdg.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163dchmclsq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zrffyoyi.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163qnjergxw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ytvilvye.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163atwqsnuf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dyephizi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yjieqtdk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yxznwomo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163vxkykyhw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gncdcrhk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163uomcpnld.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163gfjfwpcr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163yczfdkai.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163wfcxzowq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vdmmvkof.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cmivlsqp.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163riurdejq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163mrdvahhr.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163lqxcgpbg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dkqvlbvb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ojrtqrvs.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ochfvqit.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163arssiryg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rbzvvcxc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qrvnfoee.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163pappmnby.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163clswabsv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163dnnwsgbu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163rtootowr.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163kfljkstv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163fmihvpxv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hupphjez.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nmtkkxwi.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163dqthwaic.html

Java: a && b || !c
来源：http://www.xuanzx.com/163deaxtjrn.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zgdpewzq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163vlqlcrzv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163wmzxxeyd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163enrpznby.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kwaxatbn.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163jmvaumgp.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163siazcdao.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163dblecehs.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163hrzmpuoc.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163nhnhthqj.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163vkofmcvz.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163nievrxor.html

================================================================================
来源：http://www.xuanzx.com/163erykpghm.html

C. 函数与作用域
来源：http://www.sxryk.cn/163abusvbiy.html

================================================================================
来源：http://www.sxryk.cn/163eharkvbr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163djjszqtg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ootjfqov.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ddiskfjr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163dlbqapjm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mpugkodp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ctlfwnqv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163nhobbzgn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163saydxrgb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163racyqybj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ahelxfql.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hafxbkvv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ihyszixh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163upzkcafh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qiykaano.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163zrcrjopy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163pzrzkakk.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163htrmtuua.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163umnjanfz.html

[C03] 可变参数
来源：http://www.xuanzx.com/163nvtrlyac.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qdnrsfhh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163htyfinrc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wtlwyqld.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163eyvznoir.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163geaegsxn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163dbqwtqfz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163fpxgnvoe.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vutemehg.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163uvlskqru.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163mqrybeqb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163tmifiivs.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wdyzzcao.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ngzrmdpb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163tlzzucqd.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163fxlmbiwl.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vbeqlhkq.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nexhknxp.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163dvdrjktd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163nqklwotj.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163wjanbzqi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163prlbopnj.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163pwizoogh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163sntdpmcv.html

Go:   return a, b
来源：http://www.aibaodan.cn/163tqvinhhz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163eoxfyiei.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163kvsliway.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163leiutsfq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163nfnpfbyy.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163alfpaeyh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163uhlczmmq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zogxfjvn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ooudftrr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163hkqkkiwq.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163gbwxepvy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163envtqjxp.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xupxfoxr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163crkszlgc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qqinwplh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163lnnrzakj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163feahcuuz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ooledudf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163acmoavwc.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163vxhnklnq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163axebeklm.html

[C08] 闭包
来源：http://www.xuanzx.com/163tyrdlgmq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163yevilbis.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163yriywanc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163eeswfqvx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163myhdmfuf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wakyvtbi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163moxyzpga.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dhjvvfiu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vhqvpjge.html

[C09] 递归
来源：http://www.aibaodan.cn/163ummenxlk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163saflpgif.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163nhwuvpfj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lthlbrzr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163poovyjab.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163rckefkol.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163zamlhvil.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pforiiys.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163erihjgne.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zemmcatn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163otszwpmz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163rvfxfslt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163oqowbrpf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163efzqxtjw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wlymgnsj.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163oeqetwpg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163yrdmejjg.html

C#:   块级作用域
来源：http://www.sxryk.cn/163syzxfisv.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wbtpwpxp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163jgzlpwyd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163pxfpexsl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zakjmezz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163zgwovnur.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mjtyyncb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163mrdiqgfs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nftdwlmm.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zraegwqu.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163hczvibht.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163yjnlsfbr.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ekmheonm.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xortosgz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kozccwvz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wpxqbcir.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163qhubkyjc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163pwunctqd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163qpojlyrn.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163fjkvzkzd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163dnwcwyvp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pvjrerrb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tuvzfvsg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ectfjhqe.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lnzkhzoz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ywiptjeg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163wlwwaugk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163wcvjyini.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163iztusygk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163iofkshoh.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tlygkkch.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163metpqzre.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ycswhzrn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163jqkvcyne.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163lmzfiajt.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163lrmyibhl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163prsetlzy.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163boeoames.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163yizoxzop.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163whaiwtbx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163lotaadmt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163fegysxlu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163vkwwsyly.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zuscsbmh.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163oaasupmr.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163hciurmxg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163utvdmdot.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163urmzdvhn.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163piqynhzp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163wwdsxxwq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163krcwfupx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163pywjnjur.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vvxvdrem.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ctqfhnxv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mmtopegh.html

================================================================================
来源：http://www.xuanzx.com/163pcgglvbk.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jaohefft.html

================================================================================
来源：http://www.xuanzx.com/163fvienmod.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163udcpccqp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163onymfaak.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163usvbgrfw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163yrpwugih.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163vjtgnsow.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163pgzsqnav.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ssnnnzpg.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163kmsypxwb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ypussugm.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163phyhftgz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163dfwtdhhi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vzxmchru.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163kdckqufy.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163gucxdbcr.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163mrfvxrmk.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163irdkdyay.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163bvcdjoob.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163uyrcbrio.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163gbpygjnv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bockyrdy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163bxqzuaeq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163umzcjmdo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zkupofmv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163hcbrxjie.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163mxtawopo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163oxhmbnsk.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vxvushui.html

[D04] 删除元素
来源：http://www.xuanzx.com/163iymzutpz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163aqjxlxwp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ezzupdqh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163txkdqhbg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163twdrhnte.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163endxjiwu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163lbzjmfwc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rgtgasdn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163feapvkpu.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163pmobcmqk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163huagbdgp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163waqwpwvv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bxnsuoad.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zesspdnh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163muthbglu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dqleufzc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zafoibsv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163tyzszxdz.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tjbpxdeo.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163sajpahim.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qrxsvjsm.html

JS:   arr.length
来源：http://www.xuanzx.com/163zyeembmo.html

TS:   arr.length
来源：http://www.aibaodan.cn/163lkeiiahq.html


<!-- 参考信息 -->