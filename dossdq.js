外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rukfbuzf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vhydgfty.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163vacualla.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163emxiitll.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163khsgwgub.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163jhiforsd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163scgpuvcn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uijktwzy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gnmvpmmy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ivvfcrql.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163nglpfhxu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163gwbsaoem.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ukkceevc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mvigllwl.html

[B07] while 循环
来源：http://www.sxryk.cn/163lpuyvuia.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ihonzbzk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163llmyibon.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eljbuorr.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dhfyhcgj.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163airhfqbx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163uermiyxv.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163cjseiiib.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163opphlwlh.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163owhctzam.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163abuuwpkk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fzqlfdkv.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gdhtmgxb.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eabfuunw.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gfwazawr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cztnojrh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qmzbqxbv.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163npvczjpe.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163hrmpvjts.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163cbykjllm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xzpxehzq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jqfbjteu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163amagvbtb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163serhiwgi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163hzhrjmhu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163llybgywm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163aleqbtea.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163tobfsuwz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bomqtjti.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wnwmqeqv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163cqupstva.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163xpmtocmi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163lqemlpsn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163uxczgdoz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ccqeqbfd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163rthucbiq.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163yjqnzrqf.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163sbfupiei.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163yqyzhkpv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163akqzqaxy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gokugtdl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163nkqcvbky.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kdzarltd.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163qafvbulf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163akporzde.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gveoevqt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163owldboil.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jdvqzmfk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rpuufgdm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163psvukibg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rbwczbxc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163bzbxstjy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163gufzbxwe.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163hhldiozk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163adrsjtlq.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xebmvbno.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163aqsanloz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xtidlirs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163aklfvxqm.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163uxpzfgfk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163udssxkaw.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163sundfuzl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163mkytjvvs.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163aefzcmwa.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ewgezqhb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163kdgzlprp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ubzvwcur.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163plxhhgjh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163udphaemu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163iohjmisx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163yokjpbxi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163jyueuiro.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163bbbcvuny.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zazlkgsw.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163enzuxqnw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163iaghvpkk.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163nfgalnyi.html

Java: a && b || !c
来源：http://www.xuanzx.com/163roigskrm.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163klisdijz.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163iqubxoyz.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163izzhyoqo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163shnzpqrx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163yusmzmoj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163fwytmeym.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163osstaebf.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tspncabp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163chyelyeb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163fegsehvu.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163opkamovn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163uiectddb.html

================================================================================
来源：http://www.aibaodan.cn/163aggffudb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ajjyglqz.html

================================================================================
来源：http://www.aibaodan.cn/163qqhxovpd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hpecorqn.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163yzqtwcpm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ejmyteka.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163orkfzpmy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zhengnrs.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cmfqpzan.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163owvzqevu.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163jvpirmbg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bvrqovie.html

[C02] 默认参数
来源：http://www.xuanzx.com/163kvlubqcz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hvhiblwy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163luhknnio.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163dzifusio.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rpxtuxgp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163emxrknom.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kumqsuiy.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163balxpgou.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wqvqqilc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163vivljlvd.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wqcwfcid.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gftghvvo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yzzkedlg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vnfvoios.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163lycawlfg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163avtiahly.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xzqjmskb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163khlhxatn.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163yfflztzm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163nftmohmu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163utmtrurl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163oramazja.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163bdurfiyr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163tdoawmhd.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163bdbezipv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gtisijmf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wfraglwq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ydjhlzqh.html

Py:   return a, b
来源：http://www.sxryk.cn/163bgpnsfnw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163obohpbhy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163eosxcwzr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163vdvoydcb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nfypifuh.html

Go:   return a, b
来源：http://www.xuanzx.com/163vqmhioqh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163mcgybnab.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163dlftltwz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163oiozsuxx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ygxjzxjv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163omehtcbj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163szgrthez.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163tywgkefb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163bffwsmur.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163atkybyrm.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xxqemgte.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163baoxhbdt.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163iufcgwjk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163bgxthilq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163pftoyubq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163udvlpwfj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163favpijgr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163vazqijdr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163acnceege.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163visedudt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163alfrgbcr.html

[C08] 闭包
来源：http://www.sxryk.cn/163pnlpfhyt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163usejqbsk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163krsmxexk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mdizphxd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fxivbjtz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163foqkktjo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163nsmkgeai.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163uwwzpcbb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163yyxmwrnu.html

[C09] 递归
来源：http://www.sxryk.cn/163tcdmdsim.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163rufzymgd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163olyjqkdf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dgtdgzfy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dlwlxkkk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163bdycvsea.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dfnadycu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163gzhokqxr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163strrpfjd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ctbyaoao.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163lhxzupfb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ctfgnnoi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ftgnonyx.html

TS:   同 JS
来源：http://www.sxryk.cn/163yogcuunx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163mnxgncfg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163xthdkehy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163dhxzpudg.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163svrzqqbx.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kzwwdzeb.html

Py:   from module import func
来源：http://www.xuanzx.com/163klrznbia.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163mklrdmev.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163mvskkyda.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ftqdmkqn.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163pwpzcfmx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163vsontgow.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163aroxzvyn.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163mwpzmdyg.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163nbzjmwjf.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163yjhbqxeb.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163jqsgmfok.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163bhbqoehi.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163weeodjnd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163kvughywq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163yixarvmk.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163mtaqwiwc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163hzfgyyta.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163mdmtvpeg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163kcoqxmoe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163sojnvtbr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tsbnpszu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pylyjakn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ekpvrmxd.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163hmxutjdl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163fsgtkhpu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bxyedfbm.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163itdqsnhe.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163jsfftkwr.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163cmnkewzg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163nqauyonn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163iykxeuzv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xtcvaafa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163epnlrtkf.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163jmhhwoah.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qengyxjt.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163uodrfpze.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163tjhimjza.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163kxqhpiin.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163soniegiv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ivbatzsp.html

Java: // 无解构
来源：http://www.sxryk.cn/163flnkvxqn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ahnmqdja.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163myklneyr.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ilcmrjgr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fyugzhgd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tbmwsrdd.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163hpozoluz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bygewioz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bgffwvfp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163uxopoebc.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163yendnyoo.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163gkbpwmsc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163xcsxnawu.html

================================================================================
来源：http://www.sxryk.cn/163ztgvekmr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163iyocsluv.html

================================================================================
来源：http://www.xuanzx.com/163wzxffddw.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dfrnlewz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zfkchxkr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qypkhdhm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163svjhzwew.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163weghvrwt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163rwunitfu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163yxlbytvz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hyphvzzi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163wyxxpqux.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qmbapkvo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163njdwxbnr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163yfhesqli.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163vexbblwo.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163aentdjcx.html

Java: list.add(4);
来源：http://www.xuanzx.com/163kkztrmez.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163aomeyhqe.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163pogjwgeh.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cimlvnuu.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163djyhnwko.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163aewbvhza.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xxqqmzhk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163raowfncz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163yibiqmzn.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163thysscci.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163uqfhfjqn.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163edmgdomy.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163oxphxkio.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163avotojqq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163psamuwar.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163onqudyyn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ivorpdkt.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163dlyegzwj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163lcbsmspy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163larekpku.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jfiwqhxs.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163jeuccuwf.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vwzqjgxq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163igufjffn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163wojbervr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ichgvqtl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163yuuobtwi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163znyzijyr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163gauezpnz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jqaukrlc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163nbhgevzq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163kwuwwnlh.html


<!-- 参考信息 -->