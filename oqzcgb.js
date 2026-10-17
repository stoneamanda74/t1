外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163shauvaci.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163eqpfguho.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jtfeauai.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ulmnhuih.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163vfjrxomz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163lnjvteue.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jasygtsg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163amjcntgu.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163onvztsjm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163nqyyiguq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163waricqnb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163judugikw.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ebwckfxn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163rxghmubh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163fosolgfu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ywlpvhzr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163kuczwbdj.html

================================================================================
来源：http://www.xuanzx.com/163fzadtjvn.html

B. 流程控制
来源：http://www.xuanzx.com/163hbaeepih.html

================================================================================
来源：http://www.xuanzx.com/163gmgclkes.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163cdenjoev.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163sehgakkt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163fzrjdhja.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zmaxkekn.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163aaydnlsr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rbkjmomt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163nwvejywn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163yshmcxqd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cdmtpirq.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163kywaesdl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163cznmhlss.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163qrnphoxn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qxawnolg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tyzvivoa.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ckalnpri.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163jgscwhwu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163sqdlwbzv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hckdudzw.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ghvnpkpo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163clotpmsg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163tvbpokpx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kwycexpu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pjneepya.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163bezksrge.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163zgplfwpe.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163gahdyhbt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163xvqxvgdx.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163zgqwsbch.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vuzxkucf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ndbllebt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163oyfyxioy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xiobodju.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163mioxbuok.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163aooamtkk.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163rkcgpltr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163enrrfmzd.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163afnwacjm.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fqofrhqf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ujrpdbpa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qumpldqe.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uuarbono.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163jbsbwlmo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163enxpjqvc.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ebxhpuwl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163bzjewtrs.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ejpqkdab.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163xhksmkid.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163qmeitcfb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163nnjjtxkr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vknantem.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163eemlopxb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ucrimjas.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163huctgmjq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163dhvoyffs.html

[B07] while 循环
来源：http://www.aibaodan.cn/163fulbvjjk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163dnluszxi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163kiwdyvsv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yeinxxgm.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ygkpdgir.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163inqcljyd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163hvjvpokm.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lbjjgqgq.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qrzivumr.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163hxkolemx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qklbzfqk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163zqssobgw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xasuivnw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mlmqdhra.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yibjojzp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163fwflisku.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ibpawnhm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163juuoamjk.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ieopfnll.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163hlxzpbtu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163mpmrydwh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cuoiwkrn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tbhdlnpj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rvgtzdzn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163gnkorotz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qpljexxu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mnmsraew.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163gpjrytbi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163swzaotoa.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163opvhqsew.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ujxqpprz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163mjelomzf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rgjyczhd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163qlcodkgv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163yuoyujak.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163bcsosejf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ykxgapez.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163tdgcpljv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cdtrnqsy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bhhdeexk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163aixoihnu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163gaimzokm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jjwzpywj.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163mxhqmoyh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163cxqakcyp.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163tprwwvxe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163inszgcyv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ecdlrfrd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163msqptspn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163eqracooj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163csjzqyvt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163blocinfy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163yfvskdcb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163icesvkoo.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163yfhcrjfc.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163nypcvwbk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163hjgjguzo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bddwsvkj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lqtfcexw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163cceqklgv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163dlrpueiu.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163zahqfejn.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163xiuknwpb.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163twhqhslc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gzdlqghn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163rujwqicg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sqgqzhom.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lcgvxegk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163fihgwbbb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163njydnvha.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163cwczcyvg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163rumiuzun.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jvvknkge.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163umtxphye.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163sumkkllk.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163phtbwmxz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163riwezxwq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163awkgrcrs.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163xbelbgod.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mzphcerw.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163byawzjpv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163kznnnsag.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tjhnbwso.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wdjoeauc.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163mlltbuod.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nswqoqpa.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163nywysrgu.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163cajccnrp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163lofhzesq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163xbsvipuh.html

================================================================================
来源：http://www.xuanzx.com/163tvjfcvhk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163dukvmjdv.html

================================================================================
来源：http://www.xuanzx.com/163ysaphcnf.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163oxailuaj.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163sdebmxjt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163inavthoa.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zhmksfpn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jgmcsgxa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bgctjzfk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tvznbsxq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163sxdiyyep.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zereopto.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wcbymlwm.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163qzgcqhik.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qxoxhfuf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163feaitubh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163zqgcoykj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163kaksebfs.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163zjlgkmtu.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xigljxgi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163xhrnisii.html

[C03] 可变参数
来源：http://www.sxryk.cn/163wkntwxjo.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163slouywfq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163kshodvos.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bttnyhnt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ghmnwupd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163rcaaelhz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163imnyjlxu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hqtskghy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jbuypfwk.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163jabumhng.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163groezqoi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gmlmvgmt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163zftejymb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163zjidykcy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163crciqklw.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163wsovexjt.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yeloqvmi.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qxfvktys.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163liefwgyv.html

Py:   return a, b
来源：http://www.aibaodan.cn/163conpshml.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ufnyxksr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163htwlpdgc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163flcxsxyp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163koaqqdsb.html

Go:   return a, b
来源：http://www.aibaodan.cn/163lhzvcozf.html

Ruby: return a, b
来源：http://www.sxryk.cn/163uylnxkom.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163vnrcwcsh.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ywbapsqp.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163aradieih.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163xvqzykyc.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163yravipok.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163njdfdlbh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163czhcsfsz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yjugzwhd.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qgcajzxh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ctisoflw.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163qzxszvfl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jrylevjg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xqxwtaib.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163zqwneuik.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163kmxjartu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163cdzahayu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163pllfqjxe.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163jnetyshv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163fdfpijww.html

[C08] 闭包
来源：http://www.xuanzx.com/163ivaeduik.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163eeqzfgec.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163dthjdxrm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nwmdimre.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163huyrddyk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163fmflcobh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163fepufmij.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lhaodwjb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ynkltlzz.html

[C09] 递归
来源：http://www.xuanzx.com/163btyqsdqn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163gknhojzu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163pjyhdzxi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jzocsoqz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163oioyjmmr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163uqgwigzn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163fuqlcjci.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163uwqkmwzu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163yzpuxwbo.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163vaeqnmrp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zmhpemik.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163takhhtbk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fyuzrqwx.html

TS:   同 JS
来源：http://www.sxryk.cn/163aqygoadl.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qhpjriiy.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163rkyqjerk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163rjmkevtd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kfflriyr.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163yqtwrizt.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vphunbrh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qnbaggeq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163nkfqbtho.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163biqhcrgo.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163quejxaqm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163uchqhbxb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vorhcsmo.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163kdmawbvf.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163aydscmwf.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163uonbzaqw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163dkadqakq.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vvvgcven.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ouwikylv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163lrsjeqit.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163nxhralya.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163fvtvcwbr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163fckosuhq.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ajfchhal.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163tuttuofb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wodrvoye.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163yoypgphx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bsevxgdb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zaetfyok.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163bgtbmckn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163gmbupcnx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163gqfbohmy.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163tngzwasm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163umsflren.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bgayxlpa.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ylojzbbg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163hfoqbvgp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163rzqkkogv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163imgwixkt.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wahahlrj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163kbstpidx.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163glfdpctg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163woaywsbs.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163yjfnntph.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163wnbsstce.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ontjbpwx.html

Java: // 无解构
来源：http://www.sxryk.cn/163wsozlqmr.html

Go:   // 无解构
来源：http://www.xuanzx.com/163nvchjawd.html


<!-- 参考信息 -->