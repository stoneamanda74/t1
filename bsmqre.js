外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163cgibtufo.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163enhldqny.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jjmdlerz.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163njcansyj.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163rleuwemd.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ayxohqfq.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163maknjhae.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163pjwajsiz.html

TS:   s.length
来源：http://www.aibaodan.cn/163olomqfwn.html

Java: s.length()
来源：http://www.xuanzx.com/163czmscchw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163endkrtyw.html

Ruby: s.length
来源：http://www.sxryk.cn/163zzxsbcsp.html

C#:   s.Length
来源：http://www.sxryk.cn/163dpuxckep.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163oimsmwhg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163sdjosfkp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163nvtlpnjv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gtelqfaj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ukyqqyig.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163buuqnguu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163uqsljmgs.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163pewlsvlc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163almjdmio.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163xmlarmco.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163kgeaxyyi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163pijeajsp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163bqmawlty.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163djszycjl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163qcatwtrg.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163khoanvvx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163yaprqgax.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163qwlnfilt.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163bghcburf.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163lsibrlsd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163iswdvjuf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163eusqxuwa.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163tzxsfsji.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163hicpgxqt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ekvefjhi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163xnpifjal.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163eojjphpp.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163uaztznym.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163anuqfocz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vbeokiyg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163frptajze.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163bjvprsts.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163uxxizhuo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163wgfeossp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163mirkubfs.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163hsefvtat.html

================================================================================
来源：http://www.xuanzx.com/163daakpugw.html

B. 流程控制
来源：http://www.aibaodan.cn/163heyjyzjn.html

================================================================================
来源：http://www.sxryk.cn/163mpwzsqyh.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163dgjlmxun.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163jgvxagqt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163gwfzfgai.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bxnbncon.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fbggyqfx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xqvguvxy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163oqcdoqns.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163jivknqhf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mxbgiwuh.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163rwxvibpz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jzrfmosh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163bpwbpbjh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yvgrvsma.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kjsqzjkg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gdbtmibm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163bqfohnnd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163oxrosvuv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ayaoavbz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163qhwrahey.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163tycpftbx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163rtckozga.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163voymwbyy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bxlhkzec.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zdwxtpmb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163onjqbzxf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163apzrdukw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163rfroctqk.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163toutgpng.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163dgxvzesg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163arknyizu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tppkpxjn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vwbbpqpx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163qymlypny.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163lxafxajl.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163fnplhuue.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163uvrentyy.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163yvsynhdi.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163dajnibes.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163qtkixqzc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163gbbafxpa.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jixahbcy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163lxhytudb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ujpudkdw.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163zqybhfhe.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163jzgigris.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163jebwgtwo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163rqccrsfm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163fmxddpst.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hfhutgfb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rsfspogr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ogapfyic.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163wqwewlfw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ujolawlj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xvmpdiur.html

[B07] while 循环
来源：http://www.sxryk.cn/163mzdfngpi.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fufvnuhw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ekgaidcr.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fjlyrpiz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rkjlcdto.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pxvomtyg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163fxzuapci.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163aguiuqrx.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nhbeuwuj.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163fjsflgjv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mbxyzyfh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qlgwkuai.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jxchjwfi.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mtbpcgln.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fcfivuai.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163lubabbrj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163dnngfvnc.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ihhldlgx.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163isskbnoh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163wxngmydh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163jnggxzqg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zvuekarg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eaikesne.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zqzocaso.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mbgyhygb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163xdmqkkwz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zvsxblox.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163fsnsdccm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ylilbtjs.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163dwpzewav.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xmydbijm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163thwummhs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163jsjrrwks.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gwnxuuxs.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163cbtauajr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bmqlupsc.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xgcbylro.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163tuqlwaju.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163mmhojtlu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wkwyjflb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ildgwdni.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hoekqjsi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mpvbiyaq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163xietyzlm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163tpsypwyk.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163umfteexd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hcixwbnk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163lhvlrrwk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pcnohmrj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bnrxwuie.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kxxdsjhn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163tjtfavwf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163rsejrimz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163kfcxwxkq.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163llyywavb.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ipoczcnp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163huhmndeo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163swyrmstp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lvfjeebk.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163muyehokl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163lzfcfler.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163jcanvthy.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163eeflfquw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163nrzudcnq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163xrmcflik.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163cvfijsla.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gmgacbom.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163czbkokej.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163smjqagyz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163bxlhcomk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xigfvqty.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qipxqeus.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163doveliql.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bwjmsjko.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163maiymazf.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163jkiodpcs.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163xvxmsysn.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163nigogqjw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163dqtwmwre.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163taebafmg.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hnsroryk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163hrbqikks.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xoqiuqxp.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ejnpvnkx.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hyxkvnje.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163mchjsgwt.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163eztuxsum.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xckyovnr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tdwshowv.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qftaxjus.html

================================================================================
来源：http://www.sxryk.cn/163xvjmtprg.html

C. 函数与作用域
来源：http://www.xuanzx.com/163nueckedn.html

================================================================================
来源：http://www.aibaodan.cn/163plpzixhc.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163yiibotzv.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163luwgiphz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hcennvcs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163qzjitiul.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163firfycgf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kbuafiaw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dvoqafuj.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163aahlrwjh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yasittzj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163sfxomisl.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163lazzwtjq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163brgvydul.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163clkktnia.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163xfvhqyvk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163lcfrmhzv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163twoqzvye.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163utgnfuvf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163etgatbph.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kqyaxsvg.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163olkkswwd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163tckmwcfo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gjrdnmah.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bohapkws.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163vfymmtdj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qckveaqh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ynpeeeqk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tmpncwoo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dbypkpld.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163mcnduehc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163jntfawya.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163tswtrfcm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ewqsnsoz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163pwqfuvpf.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163rtiawguj.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qqrxhqqr.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sdnehjms.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cumsbbqu.html

Py:   return a, b
来源：http://www.aibaodan.cn/163jtwtsvaf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vchvhdlv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163wqsyauur.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163wrtvvkup.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nyjhvxwb.html

Go:   return a, b
来源：http://www.sxryk.cn/163kewdiqpk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163nlagddgq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163rejmxcrn.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163fknhkzzi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163kuexuyrw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163lzhmitqd.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163spxvrxbt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163sdxmvbsr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ejzrqhut.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lopwwlha.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163gerjahrf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163eoiodouv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vdqrqykp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163nrdttmnm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163cinpnmyt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jzrfjpeo.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163akpdyysu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163cbudyvon.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ceuecyla.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ijabgbkt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hvidavrw.html

[C08] 闭包
来源：http://www.aibaodan.cn/163afyrelds.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163rsutnqgn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163usepeqxn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sookxvmf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mraszscc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163iezqorse.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163gwrigxsf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163nfltmdzy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ruvyjapp.html

[C09] 递归
来源：http://www.aibaodan.cn/163wfojyukk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163apprraxo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163xzmogolw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yvtnolir.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sluepkzx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163lwpjyeft.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163umeiwure.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bbbutieg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163nndpewnt.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163veecdlvi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tzzoarfz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163qcdwnajn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163abjisczp.html

TS:   同 JS
来源：http://www.sxryk.cn/163bvjbcwky.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163phdomusa.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163bjaefdrw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163poemkrcl.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zrfrxmgs.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163waiwxesj.html

Py:   from module import func
来源：http://www.aibaodan.cn/163oyrsyyiv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163vtfywwow.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jhggkhaw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163wrdwrajx.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ulikysfi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163huvmvfcc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163zwadawpn.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163qaurqzyv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ektzgxnp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wbosuagw.html


<!-- 参考信息 -->