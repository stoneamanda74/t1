外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163fuclzort.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163kgltynlr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163twxwsozn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ixlfffax.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ecgkrqwz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163nrywfdvh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163wpvkhcqf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163tpsohxnv.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163dxzpxbll.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163tgmlyhml.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163tvkczets.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163rmatpjca.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163adtjstnp.html

================================================================================
来源：http://www.sxryk.cn/163ekiryfkb.html

B. 流程控制
来源：http://www.sxryk.cn/163qoljftxs.html

================================================================================
来源：http://www.aibaodan.cn/163kymnjdzy.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ydkrxigw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163snxinnic.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163wgjpdqax.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163usbsnmkg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163sdhymcgy.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mpubtwot.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163pufneizu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163gfrljpgd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163llvzlenw.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ykfwszil.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163xkczgnoc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163gzbuszbd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xplzksoe.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ywuqdmxc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ajnwrtnw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163rpowtdyx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163piccqqno.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dzliimfy.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163zxiqmxpt.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qnivnjiv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163tttulyeh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wbnxshur.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163idvunpbp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xvcjunkp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gcizgfiz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163txcipyzy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163mlvrssxc.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163drsylcdu.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163vgvvvsgy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163tzrryage.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gkdewdju.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tkpgbvcn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163kloracwc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163oazfcfmg.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163quseseqk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163efctysbt.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163qfphmvya.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163wdskehyz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163blevbgsi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bkbmawco.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fcojhqgs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ckxzhzpy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xtfrrsbi.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163pznqpfjk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163pmtcfxce.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163juqibziu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163cyrgrqzc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163xbzgwyij.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fscczjcs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ghiorbcv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163hjwsekat.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163aprpbllb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ezgdshjb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163whmvpkfp.html

[B07] while 循环
来源：http://www.sxryk.cn/163igumlrzd.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163cummfarj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163evmjjhrl.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tzphpuhy.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rgmgpyah.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nuvijbcl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wyuzhvsl.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163getatxrl.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163prcnmlgx.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163dqrxvric.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163zxphyaya.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163fjvktbvh.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zwcibvpk.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cfhmvlko.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tvbvlfnh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163imshgmkj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163vdkofbec.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zxlgwqvf.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163difzfsvp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163rbcvsxtr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163zyvdugmr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163grlfgkln.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tojpghsf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pmqvrgbw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163meuswmyq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163fxrpbcwr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dqwygdux.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ujciloka.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163sdbfdofh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163eibfaoai.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163zwvjkvsx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kfohdopj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163czbrsslv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163giblwxhb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163uwgqdtbz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ytctvdyy.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163uagmmimg.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mvjbiifv.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163hlywjszk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qcgtzkgd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dfdaluie.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163bggnkiql.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163yoehdhpv.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wjmrnnqh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163vrkfatmb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163utbjiamn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163wscjqqlv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vvccridr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jnxwqyxm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fnmoagdk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163usmvvpub.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qqthuels.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163umohztbi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163dgbrcagl.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163uakocxoq.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xweemwad.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163kdgtfupa.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vrhadjcz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ugfbjrbs.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163wzqujebr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163qzgxjsqy.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zncbqahl.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hcvyyfzs.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163uugdfcyq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163yltvzatb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163rutgiotf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163umfbnjtz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jfqmenqi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163hoykaupu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163mqqdjxvn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163carwsocd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163jwenbgkq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xbztirej.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163msuavdcc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hlhftiui.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163qpvjttzd.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163swfxialc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163wswgwmvo.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tfuttkfl.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163xisujacd.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163gfnrutrd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163oocyrfeq.html

Py:   if not data: return
来源：http://www.sxryk.cn/163oanmgmru.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hsqgmfgf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163fegqgnjk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bqhroktx.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fqbqcqom.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163kshevlit.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163iunanyut.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163atyjirjb.html

================================================================================
来源：http://www.xuanzx.com/163ukfrhmxi.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163foumkosw.html

================================================================================
来源：http://www.aibaodan.cn/163gsvqrqoy.html

[C01] 定义函数
来源：http://www.sxryk.cn/163crhwvjgr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163annptgll.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tzqdenbg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ppnetyvr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ywiqimlt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163myyhfbtl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163kzqhawfn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163trjjqgmf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cgjetygf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163tvhufxcg.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163nnwcdlfp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163mdqaoszw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163glojatel.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163cejokmgd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xqfplnmk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zxuknbzb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163hgerrxku.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163udehdwte.html

[C03] 可变参数
来源：http://www.xuanzx.com/163elcbgnyy.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163mvxqauly.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163kvxdjvad.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qlhelffc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rwxmmsbf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rrmplpas.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163mcgpfzrk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163taubjamq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163nqtmxgfm.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163fhwnqcae.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xpzzmrte.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ilecjzbj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nbivqaof.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nqiehasg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fqzictoc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163saqherwe.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qtnrdooo.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rnjnofoo.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163kezrjyeb.html

Py:   return a, b
来源：http://www.sxryk.cn/163lybecudb.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ofqlijds.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163rowkuxsg.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163rnprqome.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ebtqizll.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qnhtlhqi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163flpvvzps.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163euerszre.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163khkualhz.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zhjernqb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ttpeepig.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vwmqwfdu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163oquxtzht.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163njyiybmv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ahvwhejs.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163cxalxxja.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ovwezfnv.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163hkwbttjj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nfxbkjfn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qffdnzaa.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163quhxgkfa.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lhpzlvzx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163xixpmzla.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163kvvmgdzr.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163chwmnwkp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pzdpaqss.html

[C08] 闭包
来源：http://www.sxryk.cn/163tbrhbrkv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163hprcnhgt.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163vxmterbb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rklvapeb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yicxgxed.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163leynanbs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163tzbdbosh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ohdljvwf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ljsrpgcg.html

[C09] 递归
来源：http://www.aibaodan.cn/163fureoynu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163pqfyzdul.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rrdbytup.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163knbxrbus.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nbfvsjov.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163lzpwrcup.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163nhuwuacf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ebpcaynr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qpjlqpmn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163pvemlchk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163yfqutspm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163opgyerzg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vbtgmywn.html

TS:   同 JS
来源：http://www.aibaodan.cn/163yqqtcsvk.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163cwlgmhae.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163fdizqfdl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dkovmhhk.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ulqyzsos.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163yyflpbzl.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zrjxtfyi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163szfjnbvj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163jbrseyhl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ntwmpvwt.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163vtybgyus.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ceeqbagt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163muzggnxm.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ivnufprw.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163gywwkqrd.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qmnzalng.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163sgcmymst.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mlmnhpvh.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yggeukpn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163dpigrgur.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163uylpbuvk.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163lrsvqqna.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163xkwuyybo.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163tlnkicqe.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163eelbqfiu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xyncwsia.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163tcgxoraw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qecfqxht.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163acmlhfpc.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163lnvncgbc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tludkinx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163rnnqroqm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ldtqclrg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163acujlvdd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163scwzacep.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xpncqhpe.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163mjnhsksq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jadokveg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163vwekjerz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163felirgap.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163hftqmvlk.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163gjcntqzg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163yyprpoct.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tdtzaqrj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vvztubys.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163givhnthc.html

Java: // 无解构
来源：http://www.xuanzx.com/163lgsshkgo.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wcelgpeu.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ynolmjnw.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163sjrtfeph.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163rdjzglrs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wkyugykn.html


<!-- 参考信息 -->