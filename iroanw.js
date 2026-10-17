外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pfbnxxjj.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bvzbdtpg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163immaqxrx.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163yswmhndv.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163eussuski.html

Py:   len(s)
来源：http://www.aibaodan.cn/163dbmjewac.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ufikalki.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163xamjmcen.html

TS:   s.length
来源：http://www.sxryk.cn/163chzzcdne.html

Java: s.length()
来源：http://www.xuanzx.com/163neykzgyl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163upxkdsvr.html

Ruby: s.length
来源：http://www.xuanzx.com/163dxzlofwx.html

C#:   s.Length
来源：http://www.sxryk.cn/163ehtdpite.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163jzzrortw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ntrqmsif.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163rlrmbndk.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ahtwrybp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163spwhzemx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mszsiufm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163toudenox.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163mopfssll.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163jrborawi.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163wheaulae.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163znmfpeax.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163yynywubo.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163frfbasnx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tcbjlspy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163hiptrfwc.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163eyzqrbjb.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163yhwyhxkt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ubcfxeba.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163picskykh.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163kgwktxfe.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163zctpsnfv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163adsltuee.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163eohphzai.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163rssiiksv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163dmknjsbc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ggenvbgr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ehqggotx.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163vrauonka.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163kzksjbju.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163bpzotatx.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163tqrviang.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163jfjdxhjv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163adghaxsz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163shyhianl.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163zskoiufx.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163iggrplks.html

================================================================================
来源：http://www.xuanzx.com/163oohqxcag.html

B. 流程控制
来源：http://www.aibaodan.cn/163lfzarepn.html

================================================================================
来源：http://www.sxryk.cn/163pckegmdc.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163dyjgbmzl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163dbyugeym.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163duplpysu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yeckogir.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wotcjgsy.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xivmhrbn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163rnmxaxpt.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163xkegvfpu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qxrgsbhr.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163nqqbbtno.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163zipccwoj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163dnzdwhyd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qqzntglg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nzvfxpsf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163exolpowy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ioshdyeo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163maphrqmm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163radagyvk.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163xejylsmb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163tfekrbbl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163quwmsmhr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fiutysfa.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gizcctii.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ougnmfwc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163roncjaod.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163rghlnomy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163srtvfukv.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163atljpelg.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vgdprlzj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163lzhpzkle.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163agjvqdkp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dojyiwgb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163gjqstrbk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163dznlkjgp.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163tmrgyexb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163adcrkrjy.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163bztqegyc.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163fqcjaqoq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163yeddxtmy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dphixtcb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ltucvrxx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163lqfrwouz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163pdhcarnu.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163sctziwvl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163audyfhhe.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163cafuijhb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163qmbjyhmf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163kqllnqym.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yerwpumr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vxgksddo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163wrqgyonl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163hiqdbeox.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163hstwtptu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kjmbaate.html

[B07] while 循环
来源：http://www.aibaodan.cn/163yttehtte.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163sebmopce.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ynakyxes.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cfzdszrb.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bkrxjlfp.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zvxkyzcy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163dknzabad.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163qbsbookk.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ibyktjlu.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jrqcoets.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163zkotzntk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163gtadwzmc.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wbnmyjgw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163avarfswm.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yahhbntp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gxamqzcj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163tibhubds.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zpfdbbsl.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ujibtaml.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163hnyhuhls.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qpfhtfzi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ntyxdjhq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ziptiucz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gqnsdtlg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mvhnkbbz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163wxeslvht.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bmxdfxxk.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dfmpeohp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163joekvnxu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163mhwvkolf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163iuuaommk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163enjqhfhs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163smoygiwo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163mypxdumf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163xwuzfugr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hqbndtmh.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163fuwbxblr.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163nvveswqg.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jgsjdlyi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163htwvesib.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yurxuhns.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163hrmzsunk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163zfqugseh.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lmeqdijj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163feipqhtk.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163tzyqfqjh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163eehlnxfq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163haxpxetm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163irnzcedx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vyhriesj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fwartbla.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ioaizpjr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163pqmxmpbs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bpieibax.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163bxgnurkq.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163rxngkpca.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163aibgxkff.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bnzupwje.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yfuwlimq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163qsaocpkd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163luyhewdh.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jqjhizah.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163lylqgmlp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163famaifdt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163tmnjhhtc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163xuybmjfq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ccigmsvi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wllmtzhx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163xmporjqi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ndjbnaxb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qvtbehxt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163rotwuftw.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qyuorylo.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163mzprrdzn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163jvshwcun.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163iabreewt.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qwrwkrmv.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ybaljokd.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163bbciosba.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qyxzoncs.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163nogmxuhp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163trcehmhi.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ltzptdsk.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lgxsgqbs.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ojzvrcwq.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qpqaksyi.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163sevzijcb.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163alshmzji.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163axrvpcro.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163lxdgmpen.html

================================================================================
来源：http://www.aibaodan.cn/163hqbmonna.html

C. 函数与作用域
来源：http://www.sxryk.cn/163fwwwmmdt.html

================================================================================
来源：http://www.xuanzx.com/163wleacugb.html

[C01] 定义函数
来源：http://www.xuanzx.com/163dejitfdu.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163rqzciila.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163whgdjzcf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163homllzqj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163owepugsf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cnziicst.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163jfdjlejw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163twxeuyha.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ttahmreb.html

[C02] 默认参数
来源：http://www.sxryk.cn/163zjtmcymj.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163neahaoeb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163kxaprutx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163bbucyios.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xowpbxnx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mbzgzxkf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vnijizzm.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wzmirbck.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163kkaziqrp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qstbrckw.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163akouykzm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163cezwfuqa.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163egnbajwx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163gkriqjbi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163zpxfhxls.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ttjgcpeg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163bieirxkf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163agziikwz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mfildtzg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hdujzdji.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163euakgirm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zkzkuiey.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163htpztrxp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tobkzuwi.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bygbggnt.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163igxgtwgb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nmrklumr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163cmykpulu.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xdogzzyy.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163fswzdfjc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163vetbvzfp.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163weabukaz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ynowdjmg.html

Go:   return a, b
来源：http://www.xuanzx.com/163eiyipyiz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163mfgvpjay.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163idxukyjh.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163tadgsvzw.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163sfbpqfxx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dgndnpyy.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163wiphzplq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163mwhroxml.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ygshbxcl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163znacglab.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163erwyzngx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lrpgopwi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ixoqmign.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163tcqoiyem.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zlfvfbvu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163uucpzfzu.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163yjpsobqi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xyvhxjnj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163knjozffg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163xaybujhr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163jhsryfxj.html

[C08] 闭包
来源：http://www.xuanzx.com/163cdjndbfx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bmewolrv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ihanqubw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gnucxlbi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163twtebkzc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sjjsrfjl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vkqfvnnm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163oyczptan.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ijplbjxn.html

[C09] 递归
来源：http://www.sxryk.cn/163xfcqeqqn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163wvuzwbpv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163wnulncpw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rcjglnja.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hzmkbpcf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163duaudpjn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163bkvfzgme.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lhbyfuzq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163onuazauz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163xsauafyq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163yxfyxpvt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163vubfpshn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163dnzhitoy.html

TS:   同 JS
来源：http://www.sxryk.cn/163robyjing.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ciyrpruv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163lagwdzoq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vtvrhdoo.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fdiwwiss.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163cdwwmzcx.html

Py:   from module import func
来源：http://www.aibaodan.cn/163lnxbmevr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ccbmbome.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xldbyqxn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163fmepkasi.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ewmhlhzt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163loekvlev.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dxbgqsgm.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163hsoqtgdp.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163vziggumg.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163fqhppdhm.html


<!-- 参考信息 -->