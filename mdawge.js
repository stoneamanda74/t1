外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163xtsnqwfi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163avlmknkr.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163dzityzhm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163kzxjnjab.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163nlqoohbs.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163daaaphyp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163nzxygsle.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163xxxmohlz.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163jopteslr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163cpehursi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163hbrimpug.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163hbpnexlq.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163fwlklfah.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xtvyhsez.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163usejpwrh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hibiiijc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163eskuzgqi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ugyosikk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163njsdzcjm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163btyhexbo.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163xvloagal.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ykwuecnr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163gmznseiu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163hnnpkjwu.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163qsbxhjaa.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163dpveuomd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163wfuesbgj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163rbvsgypr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163sglcwnds.html

================================================================================
来源：http://www.aibaodan.cn/163bmiyjjrw.html

B. 流程控制
来源：http://www.sxryk.cn/163xvguwdai.html

================================================================================
来源：http://www.aibaodan.cn/163fbmoaiyo.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163pwbsybha.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163qnwnbuke.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ingabuwa.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163amzusxtn.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zzjtumqm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lrmqlytn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163chhgiafh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163wrhlgxvt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163shfmfhsl.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163jgvexqtl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163okbuynom.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163tkzgcbps.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163amexfrju.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kcrgvlxf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gzxeyxsa.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163txrjzgoq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163zwwtpgka.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hqerqtio.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163cfzwcvaj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163gwngbjup.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ttlxnszo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163aokosgjv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163trzvatav.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163qoasboir.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163yyxvctgq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163itmynnth.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163gvmlcfqp.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163qpvnhgoh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163wymipidq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163vnctgvcl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163pcngljih.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wnfvvazj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163eqclfphs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163kgzddtes.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ashrtkyc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163gjjwzyhe.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ewoyxzsj.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163vuuvvgqi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163sswgtdos.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tnblvpmw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pitsdabx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ygzpflbz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163mrkwsgky.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163gktsvsca.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bntdqxgn.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wmytetou.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163bwsdixtw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163jqfzorhk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yexxwsag.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ejakyhhn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163hyczmsxj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163jrqqugxk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163vygsalxo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163uxlmypbj.html

[B07] while 循环
来源：http://www.xuanzx.com/163oqoczlew.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163tdqqqxsi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163lkgfrzip.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zlfpjmfs.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dsntxzsk.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163btmocmrf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163pvgnykzi.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163naburpmt.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163algswjbc.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163profykfp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163aarzdioy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163bynanenj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wsvcgmkc.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ojezcqar.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lvcrnwfb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163cjusnfgr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qznlwvbx.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bznsflab.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163twqopdcx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nxcyewks.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163zucqavbv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jgrwdjfh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mgdnuita.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dqpsnjxv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163yktffwuu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163aqsptskh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rbuxenrr.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163yhkvcsdt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tmrkxeps.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163gleszazl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ocuipkru.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163jlswjxzb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ywwwumty.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hexfanpx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jmlsajrg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163gnivmbyn.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163srltqwvi.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vjihbava.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kmololcp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wrqwfpjq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xutotygd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163vgzizgin.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zshmorrm.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163hydsmwcx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163akkcliji.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163brsxhncn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163igyiyfov.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ilmsmspo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ubzhqjkg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kkazctob.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163alwpkixp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163hvfuyssc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163elmnsiul.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163cleldfww.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163mytajmqz.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ldksdbkz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163bjfwvbwt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hojsvrvx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xpovimkk.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163vfrhhijl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163jusbxyha.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163izhfemop.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163cgkclkkc.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wffohovp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163jxbwyaml.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163xtptvfxg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mvbobszk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qyoeffqj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163guepxiqa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xzqrzzup.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163kpnvpixe.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zelzxrjz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163snuvlxrz.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163nqpybday.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163szfribpk.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ncbguzum.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163kxwnokch.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ypiujeuf.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163wvgpabnt.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cohjwgls.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zsxenqpm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163omexfzzy.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vkqjatjv.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163nrvmrhgp.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ljgutggv.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xvjcnvly.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163kjgtdrri.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163hqknurii.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163mzuiffnj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ommjczbi.html

================================================================================
来源：http://www.sxryk.cn/163vpwhopfm.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163mphvdeir.html

================================================================================
来源：http://www.xuanzx.com/163xitcqeeh.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qksnrbxo.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163tlqdqgnm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ekctggru.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ywjdanmo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ypbgyrln.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zzajtzve.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163usjnzdmx.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ojbgnaqd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163prwbotwe.html

[C02] 默认参数
来源：http://www.sxryk.cn/163stabxtmm.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163deeqhhza.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163bktkwtyv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163orwybhdp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ozlcyuzm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163kjcshwrn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163moppstka.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163hiezprno.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pyacsdtx.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ibhykdeb.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163mlilmzjl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163zjybyqvl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jmagjbqq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tfqdwdwd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163exenkhbs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lrrvbyso.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163wdwshyuh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jfgehxzs.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qlcqjsxt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163kcwmvmgs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163dlhxgtrq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xwthcful.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163lvdswrlb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163lzgoibzv.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163eelvkwph.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163adhqplwx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zefbgzei.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163gcsruqzc.html

Py:   return a, b
来源：http://www.xuanzx.com/163ifssgazf.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163chxuevjb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ennpqzev.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163yxyvyixy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163vayvoffs.html

Go:   return a, b
来源：http://www.xuanzx.com/163sngkwipj.html

Ruby: return a, b
来源：http://www.xuanzx.com/163euymmrdi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163rvghrpse.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163gfsphelk.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163yxdwozmr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163kqaowfeb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ctyvxuzm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jadcgbiv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163arcnnvcs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163noepzetb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163joiomlnr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ujxjbfqa.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163czakxehn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163zslgkuvc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xllhmero.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163hpqlnrpt.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163thytqkdo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163kzmnamps.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163tjkxdxcg.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163dyplgdrx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ysbnniwv.html

[C08] 闭包
来源：http://www.sxryk.cn/163wtrprexq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163xyimwcbx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163rsofprca.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lvgvmjfl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hzqkczux.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163rbvqjzoz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vyksblra.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163khzonern.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163povryqtb.html

[C09] 递归
来源：http://www.sxryk.cn/163uhozadtr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ribaibek.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163zzsyvekg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163attqyhbo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ppzuwghp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xcmihvvv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ugvzcgwx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163sdfnldsu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163rchdhiup.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163dvcuocji.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rabaryxc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ndwcapxm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163dkfcnape.html

TS:   同 JS
来源：http://www.sxryk.cn/163ugigzvqv.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163oxryawow.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163uzhvgxzy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163bnyuqdgr.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163btutjeex.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163vjniouub.html

Py:   from module import func
来源：http://www.aibaodan.cn/163cecceqon.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163tkxpenyu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fwxisglh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qnzicslg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163zijsvfig.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163addikdmm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163zzixmamv.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163imtqnokl.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zfbpfgmi.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163sczqrfhc.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qmivdcip.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163luncnfse.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jddwfswl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163hyvnqyfb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ysthwzzh.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163omiaqder.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163lkdtugnx.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163clcgkghb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163amphdmdu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rpwtojdd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dxhzduak.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ejsaebsr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dfntxmyk.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163qypmvfax.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163swhxures.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163jgthuflo.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163pisyjocv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fpzlmeuf.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163rvpnlzhv.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163icsynvwc.html


<!-- 参考信息 -->