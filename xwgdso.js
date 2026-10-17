外链999!wailian999！

TS:   s.length
来源：http://www.aibaodan.cn/163cazzitlj.html

Java: s.length()
来源：http://www.xuanzx.com/163creurngd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163cmuxfxsl.html

Ruby: s.length
来源：http://www.xuanzx.com/163dclzqecy.html

C#:   s.Length
来源：http://www.xuanzx.com/163ynnkedbl.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163mpjfwijn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163kracwfrt.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163akwrizgu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163suugzofp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163puvzhnnq.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hkewfbpz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163foeawtpe.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163rjypkpeo.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163bilxdpnp.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163kqfjwupu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163irsumrie.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163guazxaqs.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163pparnqob.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tmrgpomq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163hsyuteuj.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163vjhlgnkd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163xmfhzbrg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163qnlbpyob.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jgripdwj.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ubmhcsdl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163seetobjs.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hbhvzufj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163wfxcmnbw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163lwffjnxn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163bmmyctaw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163dqjpxice.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163tjhdzcqx.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163izwpfwkf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163ikwfeccl.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163pkdlnoks.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163giqwjnck.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163iloqukci.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ohdfrwcc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163tajuwhww.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163alxnheia.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fbsglrmh.html

================================================================================
来源：http://www.xuanzx.com/163qnhaloqf.html

B. 流程控制
来源：http://www.xuanzx.com/163yfftupab.html

================================================================================
来源：http://www.xuanzx.com/163yhlkfahs.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163adlajlge.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163iocubdxg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163jxgjdtxf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fuzlwqgd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pzolakkc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dohahzgl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163zysobefi.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163uieeqork.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jxfkmepu.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163khiqskcd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163kkmdvmnb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163snawviwl.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163agfnjkhm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163utlakxdf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fxtfefah.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163jbnfgzch.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163zcmyxzrc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dbhdfwzx.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163dghkcwiv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163mbrluaav.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ikqnabey.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163uxtddtvg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xtvtoazd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163wjkewtte.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163fqnizmrr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163elqexhqe.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163orjtbdfg.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163tclwabvl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163kgnsytgd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163sgevotrl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bdrsnsgc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163exuqmmpb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163kekgmotk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163efhmakhd.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163rzyqyzcf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163wbeyioed.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163owpqrbln.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jalcsyji.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163mouyejcp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163acjebpyz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zpqyojrg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163pubhuxbc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qimrhohq.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163bjqckqvi.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163dcixpdbt.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ipeimefd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ahyaukoq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163boczxggb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163dsxnsgdl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jbxvxfyy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163jmwheptj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vuzoljrk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163xiztjohr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ntjwlkbl.html

[B07] while 循环
来源：http://www.aibaodan.cn/163bfxesnis.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163yhwrzfdr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163lupuiiba.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ysodhtlo.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qhyoqrkk.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bgymuavp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163tpenjspe.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163snbllnpc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bnwyehlb.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163bdvwfktp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163mkinygnb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163dmfqjheh.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163htmrrxmg.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bsvnbjha.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163enadxkdn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163xklmdoeh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163clkxdlib.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qfzxxqhg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163wzbjaohp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163lkoeamkn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ynncurzr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ouhlsqji.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ynvqpzoo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bihvlcif.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163fvbdjhht.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ksacowdx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pqqdqgrs.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163aihogcnd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bqdgihqt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163khyjlajp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163cpaeqvlu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163koihiyuw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163acrfjqkc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163pxogmpdf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163aobxhbvt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jwrghqcx.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163oqzsgjbh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163mycnxbpk.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163mdhscyoq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zolpklcg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163auxzgijy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163dqogrouv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163nsjgxmux.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ccooxppc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163oqsueric.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163dnttgkxr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163byqtdcip.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163bhcfedpn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dkfpujjp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ewrylfpj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163epbxoyzn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163mykijhtj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163vlafykod.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rbueuxkp.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tahncemo.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163alhgbvdz.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163jugrytni.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163czscbqfi.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ibuxbwik.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163rrxayjhd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cdgocxet.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163bmqrtzui.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163sgqzmidn.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ekivrwgb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ehpnmvau.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ozhxnqdq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xmlpmikm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ukamliyh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ffjpejtn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163jadohqjj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163pecujjqs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ekwmvmwp.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xlymwtby.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dvxqsmet.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ipgakgje.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163waefvjrx.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163auscetpy.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163eakjbdwb.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jrmjwqcq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163nwkyeall.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163vrhusmco.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163bkfkdzbq.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nypvoeix.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163crstajrz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163wjakrdxo.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163socymeyx.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ywlrjsmx.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163gytnjzri.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163juwpitjm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mxtswgjn.html

================================================================================
来源：http://www.xuanzx.com/163entkbfin.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163oykthjof.html

================================================================================
来源：http://www.aibaodan.cn/163zibteyqj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163evehprgr.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vrpmraqe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qentuumc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163lkqjghpx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dpcvbfll.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wzpryoir.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ceonryxt.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vsnxhuha.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wsbqjtpi.html

[C02] 默认参数
来源：http://www.sxryk.cn/163eazkqfvu.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163vdszyadd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163tdqrrafi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mbsccper.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163qvqrgjqy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163cfqlzzpw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qvudxdsp.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163oaazlgld.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163zcifjgkg.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163txtpmobs.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163invhfdsr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163glesgihc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tqkwmbma.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ychnbowj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163zhckzyfg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ulsyufvd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163wvyokjxu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zsgsvjic.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163omokkfat.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163noyzutsu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163jncrduab.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163itdykqce.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ekkvrioo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163bqtlrweq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fjxcjqug.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163irqgense.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qdwuudjw.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163gpvuijsy.html

Py:   return a, b
来源：http://www.xuanzx.com/163pjwfszoc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163xdrmpnvd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163aeigpotn.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mwrvbmtd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163rucgqglo.html

Go:   return a, b
来源：http://www.sxryk.cn/163wwdorpkx.html

Ruby: return a, b
来源：http://www.xuanzx.com/163pabhogqm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163fmmoikvf.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163gqqftgna.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163krzhavjp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163dpxspbgv.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163bjtrthdh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jfqmugdp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hvqkuifa.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163plkbfczv.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163custiuoc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163tubnufqz.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mzzuowwj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163nzyhceob.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163lkmqrlnl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163bzyvkazb.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163yjnflxxe.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vlittsvn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163uaawyher.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163jygguqky.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163horuhhzh.html

[C08] 闭包
来源：http://www.xuanzx.com/163vehauowh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bkiuynes.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163dqlbutuu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163muaaekdv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rhlfzayz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163xztxotvl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wabsgxoi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163wfnibfoq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bgixwliy.html

[C09] 递归
来源：http://www.xuanzx.com/163mrglawyr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163iwnvdqyr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163qkoeidbe.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nmvlcijv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163udvundai.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163skqauoyo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163uarestmb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163rmvhonan.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163fifaemav.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ihgysqlu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163diexqvhs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163iyqwttlj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jcdfcree.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wpmoqqku.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163gvodbiaj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163cggmyzlf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ytqnfpqu.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fqnxqjlk.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163nmvbdpyx.html

Py:   from module import func
来源：http://www.xuanzx.com/163rvnexplf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163elbczezu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wotsymcx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163gswrvsvh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163pqrpteyn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163hnnzthph.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163cofupdsn.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163wjpwkpqc.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163qtpflolu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163dwkimmyt.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163idjmxfqt.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163webxnnna.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bfetbtdk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ueatnlzp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xlhumpyl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gxraxvdd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rhyjveqv.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163akisswgh.html


<!-- 参考信息 -->