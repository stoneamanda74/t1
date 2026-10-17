外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163oxmfbccc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163snttadoi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163horsdsos.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163psnapuxw.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163eqodpxen.html

Py:   len(s)
来源：http://www.sxryk.cn/163obetpcid.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163pmmqhseh.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163rpinqati.html

TS:   s.length
来源：http://www.xuanzx.com/163wcgcguwi.html

Java: s.length()
来源：http://www.aibaodan.cn/163mowkeeuk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163hmcfzvpw.html

Ruby: s.length
来源：http://www.sxryk.cn/163dqtgepdp.html

C#:   s.Length
来源：http://www.aibaodan.cn/163iynusyns.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163wsbeujei.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163zgaazpdu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163witxsylw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163erzjoflz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163soeznweu.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nslcsyac.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163piopftmb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163kkchghax.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163fujawhdn.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163kncejufp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163habxgfsw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163bgkduisi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kngqyikr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163fqdvfwoz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163wpyyjjcu.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163hzfxkfmo.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163jggjxdba.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163vjrvqkea.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163iwrenywm.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163onhuiyhu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163dmsfvziz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163noleywqt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163unsomqlg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163zxqhirsi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163hjfhfyyo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163khgvsvxf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163mogpiods.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163umdtakcz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163gpdmhzmk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163gfbefwcl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163rcyqulfv.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163bcxusews.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ozcoluus.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163odnsjlyo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ufpbbbhr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163usecjusr.html

================================================================================
来源：http://www.xuanzx.com/163xqxtkyjt.html

B. 流程控制
来源：http://www.sxryk.cn/163zvwokcyp.html

================================================================================
来源：http://www.sxryk.cn/163sstfacxg.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ikualptn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163qbxabtyk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163idbgsrml.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zgiapaqz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dmbpsqxi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zckntvol.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163uiuclodn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ikoosmqs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nhmytfpf.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163idjanuxg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163vufcibcy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163nakifygp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lnbxtfap.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fjxdaqot.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zwkwqspe.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163nqsryxhb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163dbhbuenj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ungaikap.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163yyzefnpg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ulazfngc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163freijxhi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xlqiacqh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ueckwtil.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163utctfaiu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163confzwzs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163afkwqzmj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163tofweaub.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163qbaipokd.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163kynovfil.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163yeavksnx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xqayofvh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163szdbqmaq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hzwocehx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163nlvyzudn.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163bksaxjkh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163txdcrvwd.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ioxnwytw.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163pfxdyold.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163otmbixqn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vpqtzizv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163okvwhcug.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163evpdqzie.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163gqvtulon.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163bkokkqmy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mplzvnhl.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rvelrkof.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mzwzwopg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163cvuzbpup.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lbzobkan.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wwolenuj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163sfivtgjo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ybcsqyvn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163cxumoiub.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163oukhmaij.html

[B07] while 循环
来源：http://www.aibaodan.cn/163tzvfvpnn.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fajiktvl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163htfqtlby.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163revyzjyk.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fjnwufrl.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fakepufw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163djuoelfu.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163rjrgdrin.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ctcuelxb.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ksziszmq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163sjidncik.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ejzfvavp.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ewovkrtw.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bwkwskqs.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163snnmofeh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gzwobnsn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163nvhhshno.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nezlkgdj.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hmqazjzt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163dtfzdjvn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163kixpdext.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gbzmndwy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ovkjisjz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rntnhvzt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163igqwgagv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163tnppyvtk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tyguteyy.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163myhizwfw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163gwjvsynu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rsujldid.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163trsffakt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mltkhfjk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163sdgejtab.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ivddzjol.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163syvqvbpd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163hguatdbe.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163youergux.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163wxavaawy.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163eizunpmh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hlycrtwi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bqtalhex.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163kmellbmh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ffleppsq.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163knhwqavo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vbfepaej.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ombgntcd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qwcpshds.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xzybseft.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163udbyndni.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lqzvzpse.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163whhcxsed.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163feerjray.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163dnhclkki.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163jnwgqzgp.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ezujkmbi.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163lcenurwc.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163lmbvjvzi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qrjzhhnu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gwjbmymo.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163speppjzl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ylmljeog.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163qwgvdusn.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163aqhfkxxg.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gzstkxfm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163fxstqiow.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163agtpptkt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hxmoyjsq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163apkpzymk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163vvcedltn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163nhohufqf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163eleodoha.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pvvnhhfe.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jgbzolbk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163zdwhkuls.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163fehtddif.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163otbacmkf.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163hzakuscc.html

Java: a && b || !c
来源：http://www.xuanzx.com/163hhbhsmfa.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163vsliabsu.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163xesrcprn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163tugtcwye.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163emfqtuki.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qvqulhqq.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163tnmalzbz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163syshupgd.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ibjyysem.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163eqktvsqd.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rtdibtpk.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ijenskzt.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xqmcqtoo.html

================================================================================
来源：http://www.xuanzx.com/163elfhsjbw.html

C. 函数与作用域
来源：http://www.xuanzx.com/163sytafkwe.html

================================================================================
来源：http://www.xuanzx.com/163dlfvbyzp.html

[C01] 定义函数
来源：http://www.xuanzx.com/163larjxaid.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ighhxhcw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163glbbhkoj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163tqbafyfs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qeabflsk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vuhutzfc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163sllwtmrr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163zlxvwvln.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bfxmjvla.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wttiycve.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163prqdnwsg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163igoyxfzg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163vptolpij.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163fnfcleba.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163zqkmtccg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163wkevbyug.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163mhlfiesn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163tejpmcwz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163kqaypspu.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nhacwotj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163bufpnjux.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163cbbksznr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jszaarof.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163lqodyjtq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163cwyxwutt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qszvtqal.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jrmmffat.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163xxdlphry.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163tatzyyzb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163lfbxjfsj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163lsdwbvex.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qxllbfic.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ztvimjtk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ungvypbj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mknbqlhg.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vccvstzi.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163kjcpvfbz.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xljkrzpv.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163dnkofjvu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163yjhzsnbk.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163kuwkqltf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163skxonwzn.html

Go:   return a, b
来源：http://www.sxryk.cn/163guegtgzf.html

Ruby: return a, b
来源：http://www.sxryk.cn/163feflmxls.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163iqodgada.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163zrneydzx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163mqkrecnu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ljddycyu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163mtbedcio.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163kokrgcce.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163nhxmvwpw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xhydmxvt.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163alhfqgou.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163kgccvjrr.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163dldptdbv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163sdmhtlnb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ejwtfjho.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ysfdqyqj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163trlsmglu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fujjqlfh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ppyjoafz.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163wmgayiln.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vbtsjnia.html

[C08] 闭包
来源：http://www.xuanzx.com/163gglzhwwk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163txnvogng.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qvqhikzx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ieygzyju.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oraehddh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ujgazptn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163oinlnxmu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163akkxivqd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xfogmxds.html

[C09] 递归
来源：http://www.aibaodan.cn/163xmfwtmot.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zdswlwck.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pdvtyhbp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xaatxfco.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hautnpph.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163veponegd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ruuddkym.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163wndbiufw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163lkmgcntb.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rtcgbtyh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163xspdfpex.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163aqgywmod.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163rfnxepqf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163adewlufn.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163adyoamhu.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163klpwsamf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163bbefdrfg.html

C#:   块级作用域
来源：http://www.sxryk.cn/163baashvkl.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163rueitzke.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ahblxukm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163kwdpwwmt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163bxvdiihq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163pomxpzed.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lwlqkskp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163jzjbfqcb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vgsbjunz.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163smqxvgrw.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ppkfxote.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kogmepvy.html


<!-- 参考信息 -->