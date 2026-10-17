外链999!wailian999！

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163pryaqhzi.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ebadmyot.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163grazzemd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ematrhkm.html

TS:   s.length
来源：http://www.xuanzx.com/163gguxdwvk.html

Java: s.length()
来源：http://www.xuanzx.com/163qqrgjrur.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163njdjirrq.html

Ruby: s.length
来源：http://www.xuanzx.com/163frbcdgaz.html

C#:   s.Length
来源：http://www.aibaodan.cn/163flxnvhvp.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163tcseityu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163xghzvufk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163oirexhja.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163diltcvqk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163sosjujvq.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gwrfpmuu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163trthfbzu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163vshbgayc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163nhvraaib.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163sigixodl.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163doythzuk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163rkjkndif.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163daghsdgn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163khawwgrk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hiywtwsx.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163hmkwhcsk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163qjzxjmsm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163yknrlfxl.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163vbeanmtl.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163udjiifuw.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163dampxdot.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qclepqly.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163sykttdxx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163mkzusuni.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163zqmwmcxe.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163wwbyefdt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rarcxsjv.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163beohjnvl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ksfccbnv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163dxhdcbiz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163wumwiahc.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163cgpmwkqz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163yahcadfu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163aqfjammf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163czidmcme.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163bttljoiz.html

================================================================================
来源：http://www.aibaodan.cn/163kwtjoqgr.html

B. 流程控制
来源：http://www.aibaodan.cn/163sjktlgbk.html

================================================================================
来源：http://www.xuanzx.com/163ynljhxam.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163sukvcxif.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163eiyafuhx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163fttdbvip.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163msdrbwvx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kqjppxbe.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163csgrzfwr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163egawqhsx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163pxctefsl.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163trrqnyio.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163nrnmryip.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163obzuajly.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163brytzfqg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hpsewhlb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163unqvjjrs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nmnapqob.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163iziglevg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163bnlvbfue.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vjzvdcvx.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163kurxooph.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163gunwyxqr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163nvkocqjb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ctfeytqi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jqldfmic.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163dnxofthx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163bpgpmkxf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163hciftuvi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163bkchkusv.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163jounnyiz.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163caymrsud.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163uavdzqob.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163iuseeczd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dfpvctvg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jnquiryv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163kdgwiwzd.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163knirursr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163rttjinmo.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163behgjsas.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163spnmpmzv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kjxxgggq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ryuwgyrq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163beatlojy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jyoffpfd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163zbgbzshd.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163lbrfylty.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hpntkqmc.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163mqicoorn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163myqfzoie.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163hxmqwhig.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163exkcwhef.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zbekoffy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163eojkhyer.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163deihmomg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163sbpqowmn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163osclbwqk.html

[B07] while 循环
来源：http://www.sxryk.cn/163hhwpnyhz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163bnzqaldy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163caoinebp.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163omsfhujm.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163klbwyulh.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bvxnmgwm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ljxsvqgo.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hrqlvgbo.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lkxukbzc.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rbhmfjuq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163mrtewavv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jkdjbmpq.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sfkullbm.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xkhedytt.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163meldixju.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163rfgxpszs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163gcmgyosy.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163shydolhg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163cjstnzgr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163uxchniob.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163iqtnoakw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vnqtluma.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163clesqrlq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163axtylfcb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163uchafkiq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ygavntor.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163schpctfb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163zjrsbvxv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163kwagkabs.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163fmekbzhn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163malyptsj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163eamgfhej.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163yowmedkg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163aongxqjf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163drrjwpyw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163iagoazue.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163uhuthlqw.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ddcogltn.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163mqibzaea.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cohfpifr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xsvxjgon.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163jpmpsetf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163quupydxg.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163dfkpuizp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163tvxqpawh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rtyioqig.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163hqfsutsc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163niqquqnp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ufrwfaip.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lobnxypl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cwagypsm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163dyophbxs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163yqiymasw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bvcotfub.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163boynaiys.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163dvnbrdsz.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163bazdlthj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xkonvsvt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fsztjjmr.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163jkgtrasw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163dwedbmdp.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163eibcottw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163yoqtrnua.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ryjipjak.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ftgmnayp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ohtiatny.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xfqyaeoh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ovpbzfgi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rffyppaa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163aslrhzad.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wnrpgrip.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163yzcdjmhv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163irgsqstg.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xqnqtoet.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ludkdfln.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ynvhjlro.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163wjountga.html

Java: a && b || !c
来源：http://www.sxryk.cn/163gvdmcvpw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tsqklfak.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163jadckkmm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163vgtbfcgk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gqbysffp.html

Py:   if not data: return
来源：http://www.sxryk.cn/163gkmzwgpm.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163fsaymqns.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hwpvwpzl.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163cqphkqsl.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ryecqaje.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wktgnmgx.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163acedtykx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163jwpdudly.html

================================================================================
来源：http://www.sxryk.cn/163pgzztsjk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ocjinqdd.html

================================================================================
来源：http://www.aibaodan.cn/163hldptckk.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163tbsudfgb.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163agmhmktk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dpuqwtvz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xjemzrwf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163piwxqoyv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lhpdxzry.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163yjjnwusw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gjsifbjw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uwamjatz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163krggcnxv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xyomohms.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163rmlrptka.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163crspuixy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163piieqidb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163sdqwqsif.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163hebmddwm.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163mzokxxes.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pbstqyyb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163baisixku.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ynmtxmgn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163llkfyjty.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zkwnmuhy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ybwbhubt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163bxyfxcdu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163dhafjfqh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163lfjuhrqb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163vvukjwlx.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ssebhpzc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163aocgiaoc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163wmhzvbjz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ctfukbqw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163cjfjyxpo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ueotopwo.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lnnpkcje.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sqaanqpk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nifwnojz.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163miuyynsc.html

Py:   return a, b
来源：http://www.sxryk.cn/163yskbxqnn.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163swcgrtnr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163zmbrkycp.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163tyujtzow.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163aifuyfmt.html

Go:   return a, b
来源：http://www.xuanzx.com/163lgvisewt.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163rxdehoik.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tokcdkql.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163czhtwtca.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163lkmbxicn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163fkdkkznn.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jbobdddk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163mlgzxwnd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ipwjwndb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163gdcptndw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xurupwfv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vuhmfpgk.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163dktpcgyd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163pwnntmry.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ldidbwtl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163dcofienf.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163kwvwauwb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163jiijobnt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wrdqnfvo.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163uwvrydqx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163tptvrzzn.html

[C08] 闭包
来源：http://www.xuanzx.com/163bpiflenp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uabqzoox.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ioeujduk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qgdmrale.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163becxjysv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163jjbxiuzc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wveythrg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163lowlogcd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163iibefwmm.html

[C09] 递归
来源：http://www.aibaodan.cn/163izczrpqp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ynepxlop.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163zetleomg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lwshdhme.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pxhlehbv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163zbmjvmkb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163pbtchydm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163bbuzgquv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163eoxaxokd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163xzvlwkyl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163okoljtbp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163esszhwmj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ytigwowy.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dbbicyre.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163tgtkiokw.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163jdldlpsc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vclyxztl.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163sxqfocpd.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ndhifhqa.html

Py:   from module import func
来源：http://www.aibaodan.cn/163hxklnqtk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163uvifwybd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163tgozvtjd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163cydfaxbw.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163myejcryf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163iuooyamz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163qtqqvark.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163vxdrwrsa.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163bdqwejuf.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163bqshiumv.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163eocmlpxb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xiizpbir.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fypjdbcn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ayguavct.html


<!-- 参考信息 -->