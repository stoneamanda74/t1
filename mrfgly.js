外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yksdpfyc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fcxpvqsc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vzidgakg.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163napqzwgq.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163pqkxfxur.html

Py:   len(s)
来源：http://www.sxryk.cn/163kxhvsfpm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163yupexjgq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163tezpwgly.html

TS:   s.length
来源：http://www.aibaodan.cn/163hkwzhvrj.html

Java: s.length()
来源：http://www.aibaodan.cn/163petdkgyw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163vtjckcfz.html

Ruby: s.length
来源：http://www.sxryk.cn/163uqpbfqfw.html

C#:   s.Length
来源：http://www.aibaodan.cn/163omcopszi.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163pfqwmzke.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qztxqfff.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xxruuzer.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bozmcgsi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163cozfqwlm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xrhwaffm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ecmbdkfl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163tinrdrib.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163iphttafd.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163mzkmppwo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163gejjreof.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163vthgsyni.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163etiwmkfk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163anptkbnp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163opoyhtre.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163rzwlxkey.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163fplpzanr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163rvsicjfn.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163diaefpsp.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163clyejnsf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163gdtpwjts.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bpsyrdxt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163eatsunfy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163pnutrmbc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163fpnqxcso.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163oxyhmrwy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qylbnphs.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163iijthdwg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ndtttzfi.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163wjwtdtwi.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163lnawsfdc.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163otofzpjv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163fakxlbwm.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163zvvfuqlz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163whahnvjq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163qmwydytt.html

================================================================================
来源：http://www.sxryk.cn/163uwcuebpf.html

B. 流程控制
来源：http://www.aibaodan.cn/163wrmahqbt.html

================================================================================
来源：http://www.sxryk.cn/163uqxadyip.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163dvoetady.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163oiydcrwm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163iinvudmm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gviyuzli.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rlusntol.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163injxpvss.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163uaqcvxai.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163vrgohisq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163byllntsv.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163hffitvdu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163qjrzsyit.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ruwndyfq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bezjnjpl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mgauxrcz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ltnophfa.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163iyxcvxkc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163cvjvuhqx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kynaqpew.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163fctwyiub.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163fhfhdnuy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163llwseosy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ddhpzgyj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tkgibmvp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163adngzaiq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163vhyvrpmv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163nmzcehmq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163jtwurbip.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163inbeeqyx.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nhckcxny.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163tbetxlvr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163pyrzjvdd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hzdaofbs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163pndnqhej.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ekrlztyf.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163nnjpscon.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163odqwciju.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163uamwcrsy.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163uwlzgljk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163hgleyxdl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163stylhimg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163veonefbn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163glacsmyj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163uxlotsdo.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163pjflovyp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163koavowml.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163cjjesngn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163lpebvzbe.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ctsepzsr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ozzjxcrd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163proeopun.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ytgjyykk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163fzvmibyc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163wftxzemm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163imncfaki.html

[B07] while 循环
来源：http://www.aibaodan.cn/163pfcdrheo.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163xdtmwnau.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163gotzdfzk.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163itweezdf.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xtxmdkmm.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kjplhelr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163zllsevup.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ndcohofs.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nftvvrwp.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ybhtnhqb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163axecggnt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163mxqxitxo.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wdtwregv.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yjejqugp.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163orgvdrkv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163xnchurlw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163yfvzbhmy.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lfxiikjy.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ejcuwrrs.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ucbrpghy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163moaqvelj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pfrtbwhl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qxzijwwn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fnafxegn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mujueffl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163nvfdzfee.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hedyvqyl.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163dtbjctwr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163zjrkfiqd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163hpzeuxxf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163eqozspzx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ctgkiwtw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163sifavacx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ofvkzong.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gjpnkqet.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163quqfiihp.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163zqwfagza.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163rymqbekw.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kfpsgefk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163udofgctk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ayukcomz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163gfjlndri.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163lxrzbwil.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163hxcyjekc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bqjslbfl.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163pgisqieg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163bmqaduyk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pwhygkfj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wxwyrdrx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vyqmzwki.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pmgdbygu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163funyvzwg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163wdskoypm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163pvzajccc.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163vulesiyp.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rvkduhot.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xgunszou.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yxvxnqgj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163oafivotb.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pcvaitdo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163xnroayxn.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wztnwmdd.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wyynkopf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rkxsbive.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hvnlqlzr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163zayoalsr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zrbscrtp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pzmolhfc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cyugvxyg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163zgqwavgr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163cvjbydpc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xmsqonqs.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163tghmiibm.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163mzfhvpyy.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163dlxqldsa.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163mhynedkk.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jxwyzxha.html

Java: a && b || !c
来源：http://www.sxryk.cn/163otqzfgrs.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gnfxdvng.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tivzhmla.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163npjkzfji.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163bawxmert.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ojdsgtdl.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163skmowcok.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163itjpdnjk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tnilygsx.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ptrwenms.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163fkgryttd.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tidaorfw.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ayinaeyx.html

================================================================================
来源：http://www.xuanzx.com/163vcaujyxe.html

C. 函数与作用域
来源：http://www.xuanzx.com/163gsqytcxx.html

================================================================================
来源：http://www.aibaodan.cn/163iftkrejt.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qypbaxni.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lthggvhd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hbnznuam.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ifbzjshx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ptwyhczb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dcejqnwm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zkwvkshq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163nlkizgfs.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163eglhulvh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163gsgurmvk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ouzdceum.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bqjjxwhx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wtjnapwd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xfmbhuks.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163yttmroqd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ryihqdik.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163sfkhcjiy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163mbenulys.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163qnaixytq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mqmhvbir.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163bnqymvun.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163sfdhdnxe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dmaofgzs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qvnplrqr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163iahuszwz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qljqfolb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zodpcltc.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163pddbywgq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163vajtdmgf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163bfaeepsd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cmunvfhb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ffvxeujr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163xkxosmid.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163sdvopkvn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zhvqvahp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gkjsiuvd.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xtyaxdxy.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vsdjophs.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163eanbsvpd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163gfelvzeo.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163staeptqu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163rikstqfd.html

Go:   return a, b
来源：http://www.aibaodan.cn/163swbxzjdp.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ncpssdhz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163fcjekscr.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ankwabhb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163nnbxigvb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163vmfhztwt.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163mbokhify.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163rvpbkqyj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163vxxiokeb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163vojuzrkm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163goiymuux.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163weacjywi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163pfndmsop.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qoseysjj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163yghuebum.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163yiujicly.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163bhobpwqg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163yqdkeyrk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hoidrqzp.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ofglkhln.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ohlhgttw.html

[C08] 闭包
来源：http://www.sxryk.cn/163bdecfxls.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mlajyxla.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xckpvmmk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lsyaevvk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gvutqtea.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163qfoaxyij.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163nqojeazj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163lohcnjph.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bwpqrwdf.html

[C09] 递归
来源：http://www.aibaodan.cn/163tccgushc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xpgjwgiy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163tyulsihw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ftqnpyeg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jhtovfju.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163znnmbdym.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163gdxpvlza.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zirebzjk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163hretwrtd.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163pixmykzw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163uuziqhat.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dfzzkskz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163zdhopsfd.html

TS:   同 JS
来源：http://www.aibaodan.cn/163jwfscyed.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ghsbhwgg.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ppsepfnw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163sunllbsk.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wgksafhj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163iqgwzusf.html

Py:   from module import func
来源：http://www.xuanzx.com/163mgngxhgo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163bkgoruvn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163piwqjdhf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163usalpylm.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163bilwdlbx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163serpjbhy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163gopmqfjy.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163txeeojcj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163fxnnzxaj.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vxwyrdxd.html


<!-- 参考信息 -->