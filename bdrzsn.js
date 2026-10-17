外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vyoznduz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ecfdqdam.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163izxllsed.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163zdlcaqvn.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163oihwdbbt.html

Py:   len(s)
来源：http://www.xuanzx.com/163qqdlchzv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163llffbvko.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163txxwlxuy.html

TS:   s.length
来源：http://www.aibaodan.cn/163zzjhopqd.html

Java: s.length()
来源：http://www.xuanzx.com/163mqnttgze.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163exfvlube.html

Ruby: s.length
来源：http://www.sxryk.cn/163eenyfpvn.html

C#:   s.Length
来源：http://www.aibaodan.cn/163laodloni.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163esomvdjn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163wcemqjym.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163sfydincc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xdwmwiqc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hhcmxyak.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rckkazpe.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ckyzhbbo.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163puexntci.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ylcjjisj.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163xqjjprrd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163bntpghoi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163namcucnm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163bwkexywo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bqdymkbf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163qedlvmhv.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163uuitgxxi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163oneljvso.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163rzmximvm.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163aoryuabk.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163owfcbned.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163txphhffa.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163uphtvvgc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163cylzeyck.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163cwpkwjei.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163mbvlfgoi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163hsaxsjhk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163hjnxbzhu.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163qwatrjde.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163aqakynxr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163mkiffmjv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163monkpkfk.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163xnldrfri.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163jdfjeuwy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163smebmglv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163zgsopynd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ebqmxdmo.html

================================================================================
来源：http://www.sxryk.cn/163hrblsqwn.html

B. 流程控制
来源：http://www.aibaodan.cn/163umplhxiq.html

================================================================================
来源：http://www.aibaodan.cn/163ydegejvq.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163vsprxzzk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163kxdzkkhl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163tkhmmuon.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yywmiaha.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ijuwtdcq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nlrumvdj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163vdzulyvo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163xnrhbqiv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zckddmtk.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163tgrnqjsh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163njjshkgt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163oqpyoqcx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rhuhsuni.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ejwemtrs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nqtojmik.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163zvxcehui.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163goishufd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nrsovgdw.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163nqkompht.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163gdkpjakk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163yfstpaot.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vhegruzl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bgmpvywt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163fnbwipev.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163wjgoqhxe.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163smcoegja.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163tskwjvob.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163wpnteair.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163lnqpwxvu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163kpbrhcvf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rwxektyq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dyxgchsx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163nhjaagvv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jcnsltbo.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ghvuvvvm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qceqceij.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163rfviqlye.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fdexxeth.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163sodbsdvh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xbrxosqa.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163skaiaucl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163swjxaaav.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163gubpdgow.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163xowkqmqa.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163hfpwxqkk.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163fczzfmik.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ghifhhgf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163cppprosy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wrazkbye.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rwkpzmjb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163orarqgzo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163mkkxewob.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ggbkdebi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163kjjcybph.html

[B07] while 循环
来源：http://www.aibaodan.cn/163gjmwaies.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fhkpprez.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163aygypdcp.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vwqmfvjq.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dwhifbeg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bykseiwk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163achrpehx.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163pxtxihqy.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163raoydmxo.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163aqknfshi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163scuudpdb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163zpkgaldb.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eltfpczf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bnlchali.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dcucbggh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163iytjzihc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163embjzasc.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ixrgpuds.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163dzmukuob.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163evmpegzh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163twjlczgn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wjbiztjz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rjggqukl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qyqxmigv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ucrfrcdp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163qgkecopj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wuayywvp.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xeiiazhc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ugpqeuic.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163jjkpedvc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163inoisaxe.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ezzqngwf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163tyitshsm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163afmvkkfw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163wbtoisjj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163uwhzalbw.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163fbkoqnrj.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163vdjezday.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163juvbpynb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163epmffhgp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kjexnkwe.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163blbdmxnz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163utlfhkbm.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163cwsgfuee.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163prccahvz.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163navznkif.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163bwjcawby.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163xfdmhfnn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163geddoylp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nfadxvxy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lekybezw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ixzpstys.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163rowezltg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rrbubzmu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163gqibctsr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163nwmvgrmt.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163perscamw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163psdyuety.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vkptcwhl.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163lwlkbmbz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qmfiphfe.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vcztdftu.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163xconldxh.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vcmbssxi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163pqheebfy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163yyfamlyx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ppgquxqy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163uyfbzejn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163bhmkwwsu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163tmmxnsjv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163fxrdoqhs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163xgjncvyr.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163vnmrvbdb.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163lniqyrys.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163wdrgnmup.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163rxjgoapw.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163aikurkrm.html

Java: a && b || !c
来源：http://www.sxryk.cn/163elrlqddo.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163hfvkslzo.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163rvqzzbij.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fzxonziy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163pupmzezb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163jdeasyun.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ybbrixwn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wlpupaag.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qcsshdqa.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jezpktka.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163iqcvpmsa.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163wrrazhsv.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zfrofogw.html

================================================================================
来源：http://www.sxryk.cn/163alctqlan.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163expgizny.html

================================================================================
来源：http://www.sxryk.cn/163hsoogucv.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ixwjrbzw.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163atipquir.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163aioudtxz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163fmdtlder.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163czlimoyn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bgchdkea.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163yhajywvn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hgqsmjoe.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nhjoeyuf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ocuvkcst.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163qufsshun.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vlynvfck.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mtvelsqc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163mazacuya.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163jfueqtkj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dfkwwfoa.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163qwtvtctz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163tqcetzqf.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ldsivazf.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vngkhzlx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rvbhhnqt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wywfkeol.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gctqufmj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163twppoqlo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163zuowhtfk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163obsppjai.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qytsawcx.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163anmofovd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163vkuxzvzl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163catfkzzg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tllqptxz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qcmkjycz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163wdpnmwdp.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163rxiquofr.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lwwufqbg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wtfeicrl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163egkbrfcs.html

Py:   return a, b
来源：http://www.sxryk.cn/163dzytmopu.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163yswjtixz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163gfdbmgns.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163tsmfxydv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163cffjnnue.html

Go:   return a, b
来源：http://www.xuanzx.com/163viisrclm.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163uzxptaxd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163pesvwlov.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163njmokklg.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163lhnzevkf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163fwkuyaou.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tovmzwlc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163kwmznagr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vteazgsl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163sjixifbp.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hcwfujqf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ygjmmxdg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163lodujiqw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163magdommx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163iyrfipiu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ocxvoswj.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163rhdyvajw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163spewjxes.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163uzavznva.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gwxvuzyn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hmvafvwa.html

[C08] 闭包
来源：http://www.sxryk.cn/163lpbrcfur.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ckhbihdd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163tydvxqbo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kltttbhz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wwgbutcc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163trxjunrk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163fbckkort.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163soqpxppe.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zivwwdkc.html

[C09] 递归
来源：http://www.sxryk.cn/163wbxhqstn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163aedzwglx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163tswaqlpz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bjnpfdhp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uohaexmo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163lngpaole.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ilprjfzb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ouaozbsw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163cldvuwnn.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ihsjnklx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rkjddgtk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zsottpdw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qqzbkmkq.html

TS:   同 JS
来源：http://www.sxryk.cn/163tfuzwslf.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ohfrcahg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163iycxzrdf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163gexpqigo.html

C#:   块级作用域
来源：http://www.xuanzx.com/163nuyzkchv.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163bmdzpgcb.html

Py:   from module import func
来源：http://www.sxryk.cn/163eyvybnuh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163sfwvguim.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fepyylct.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wenadapd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163bzaahtuh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163znptgzzv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163uacyxyhb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ieefzbqf.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163adpckslj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ciuahfqx.html


<!-- 参考信息 -->