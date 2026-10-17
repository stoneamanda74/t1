外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163hcqgsmrr.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163syatknbg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163vwpmqkib.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yamssaks.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163tyfjwoya.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163hdgzfrjj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163mwmbrnrj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163hrfuhpwd.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xjzagujz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163dvtgpkef.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163jwxbrgap.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163jkrxfvcj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163atgjzvkp.html

================================================================================
来源：http://www.sxryk.cn/163ytxvhqvz.html

B. 流程控制
来源：http://www.aibaodan.cn/163sxbgrwsl.html

================================================================================
来源：http://www.aibaodan.cn/163bhqcrfrs.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163qzraktir.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ddjhqwtk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163kgmesgxl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fabosvet.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zaolyozv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lfjieyfn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ieffwntk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163pgzytmee.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ssnvgpjl.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163aoeqdgph.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163fndchehp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163dvvlfjas.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kogahlmw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ueuxcxcw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ysotrxlz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163luwhrxst.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163lmllkpjl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pjrsobnr.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ehztcdsl.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163xqbgjlau.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163wjcynpvm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mzieksie.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163tlvjpxiw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163nfjivzym.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qozxvctg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163kgflkhrm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163asihjsws.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163hzunzrbg.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163umpqxgov.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163gmqdjdde.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163aujyfgpl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rxtdbapt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163iyyuapwy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163oonyztdw.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163uowumaud.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163mlmvraik.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163nsdyxsga.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163knuscxww.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163rwoxybzd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163seaqrqhe.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rqvdpvka.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163gepqrvne.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163roollmnk.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163qprizlwy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hfmvptpy.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163tnyyxbht.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ycxmcwpw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163bcxlwrlx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vivixsjx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163enwspsro.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zqulgxdc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163dcpvafuc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163zzwvzksk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163rwcymtfy.html

[B07] while 循环
来源：http://www.sxryk.cn/163rpoxevbj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wqlvpbar.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163vzsftrhs.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mblpuxja.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163geztqocs.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163erygcrkt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rcnuakie.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163opyvdlzf.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ygoohvpx.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163dntvscqe.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163hcmqftpd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163kncqcyaf.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fqhchslh.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ivepnrhv.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ieejfysw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163kczqrlhi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163crwjxmoe.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ifpycbmm.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163bjjegdsd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163najuiwra.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163yhdfhyka.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ocdczzfd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fhwkbnpb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163awvlrvtw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163dqtabljl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163nxvmdytx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ucgqoyhc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163nzwimcra.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163vscochen.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163mwphunrr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163rnflhvat.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163qdlgzwny.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163jbqvvguc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bfptqnig.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163almcimtg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tyoisymg.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163mlecwtih.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ciuwyytr.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ddnjnaqw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163obnyeexk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163axkcqqyw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163zmmkdylv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163rwupdkav.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163pmccsebm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jqtrqcnd.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gvjemcen.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163mlolxyvk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bxrwhhdj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163eiskhvwi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lwnehqfo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163grcqyoon.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vkifljnb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163xeyueoar.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163gwjtcbdl.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qgigburz.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163wikwejto.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163diobzich.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bfynlqjb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163orbhctdl.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163sabvuksz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zmvbzwzd.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zzuvbytg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hxukpwoq.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163objhrpmv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163czppbneb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163mewnuvhe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ourmvixo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qplpgaxl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163sgicbrdi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ummapnps.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163cnnsgyig.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163swmsctee.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163allhxtyl.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jqyqlhzv.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ndpqrssm.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jgamyxvl.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163odwllqgg.html

Java: a && b || !c
来源：http://www.xuanzx.com/163eaysrvyq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163mzbhctux.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163oxgayzke.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163cixottzq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ncicjoqg.html

Py:   if not data: return
来源：http://www.sxryk.cn/163iddljezy.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163eabrmbzv.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163rxxbvjfa.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163excomewa.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163hziahbsa.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163saxmmkqm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163zufxaqdq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ltburvwi.html

================================================================================
来源：http://www.sxryk.cn/163zskncwka.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zmsiakwi.html

================================================================================
来源：http://www.aibaodan.cn/163dangwfcc.html

[C01] 定义函数
来源：http://www.sxryk.cn/163tehxwqmq.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xmkwcens.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qoebamzq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nhsnahnf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kswmqmoo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163imevlvmz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163gzamrwpm.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ufiirkhx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163oqkshmlr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163iixdyail.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163snfajdtx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163wfmxjojn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163rrkupfir.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163mldjcfcn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gdzowbcu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dwmisbdq.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163bnkyglty.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163amcwurub.html

[C03] 可变参数
来源：http://www.sxryk.cn/163nrgytbnk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163pxjimdww.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lnnycaip.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mcdnqqvs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wqxligog.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163znjwtsht.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qstnlywn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163tbabaxwf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163owbbthlb.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163etwtviww.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ragnqdaw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163pbagmihl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163jcprgxer.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163igewwipi.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tkhlihwj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163cprqurwu.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tbmjbrkx.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mbnxmbcl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zxtbxytp.html

Py:   return a, b
来源：http://www.xuanzx.com/163ujnntrpt.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rycneblk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ibzzqmsr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lamjpdqr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zumaunkr.html

Go:   return a, b
来源：http://www.sxryk.cn/163odtibydp.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163mwynyrap.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mbwcqmjx.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163muafygiy.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163phrpzair.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163awcgmuac.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163bdebqshm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163sehvyoqs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163zqeuzzkk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163eohstjjl.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ehfmrjwv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163cfvmsxvd.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ildbllnm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wzmwpcuj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zpljlddi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ctocnyoc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163biavfsgz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163sizeauzn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163tgsbkgsj.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163bsdikclu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ereajeyz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163eatczogn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dwlebecu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163akakucnd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ywmpilax.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163laxgemjj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163jhansljc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163oywiqeia.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163bnebvixt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tndesonl.html

[C09] 递归
来源：http://www.aibaodan.cn/163eqloqavf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qumzrdny.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163bpipelpm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wojpqcgy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tmbjcwbd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163wufltugo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163pjgbzwvb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163tuccyrus.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163elridjsi.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163pazijkgy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163nmwcxoql.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xbtkfijs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163zlghtzzv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ojrofvbz.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ampcbmoj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163xvpxucxa.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nwepiumi.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ipxvxuwa.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rznnqyey.html

Py:   from module import func
来源：http://www.xuanzx.com/163rjelfetf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xncmgqfi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163yrwkfsbp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163qyvakvbn.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ueyrodvx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xwxnetxy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163nrqqisje.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163edqzkcpw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xgotsjwo.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ehgswlxm.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163netjsxnj.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sbrabeks.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jvpdwwwo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ygtfcndw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163iqgcvzyw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fzrpanff.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163fqdtpwoe.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163bffxdkwi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163iuhdqrlt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bpffnvxl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ldyvwyhg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dhahidfh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gaumdprj.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163hdeythve.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rpbeokhj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163kpdtnaud.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163czsrkuux.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163wxgnxtkd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163mobfmtbh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163rdvlltkl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163daukvudj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ylcwuphl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163utxecjic.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163hhunoqzl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163muyvqzcq.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163otvzinsx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163unwkjjko.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163lsheubyj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163uaiwsmfb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163cjmzssyq.html

Java: // 无解构
来源：http://www.sxryk.cn/163bxrvbldg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163dqjhagtb.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rpmbthhq.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163vtakcjxf.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163fsvaditw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ftrecqid.html


<!-- 参考信息 -->