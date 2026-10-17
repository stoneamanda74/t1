外链999!wailian999！

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ubwlonil.html

Py:   len(s)
来源：http://www.sxryk.cn/163pjimvfdj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163kzqmlays.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163fbishjhs.html

TS:   s.length
来源：http://www.xuanzx.com/163qllpagig.html

Java: s.length()
来源：http://www.sxryk.cn/163sndpxewr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163eovioret.html

Ruby: s.length
来源：http://www.aibaodan.cn/163mweuisji.html

C#:   s.Length
来源：http://www.sxryk.cn/163toljtltb.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163uynllwom.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163wqigntft.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163qqnlhoxr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163oiejfcrx.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tlduguma.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xczutekg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163kugjdyxk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163bgcmnufg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163prrejxvg.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163engoweol.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163fsqcilyy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ycwsvcfc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uqnuleqh.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uvbsrsjv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163qchflaij.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163zthxcekd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163jdhwniew.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163cfntdktn.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163baebrvqq.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163esqvzraf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163wmjziexx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ztlzmosd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163iuvmxpfp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163nlvgkjbd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ilizfksb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163nezwqqxo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lknofncr.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163kripcvit.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163mcpshgnf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163kczeufrz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163kpqcafnc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163mxupjjsx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163gqirblwf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163dczwrppj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163tthabrqo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163duvdeeem.html

================================================================================
来源：http://www.aibaodan.cn/163rzizxsjy.html

B. 流程控制
来源：http://www.aibaodan.cn/163rlidpbzi.html

================================================================================
来源：http://www.aibaodan.cn/163bgsbphlp.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163jlowssif.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163gzeygkjq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163otjecyrp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163thtpvini.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ibwtfsaj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yfvxkkyu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163yueovmln.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vwiglcac.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gyyvvkgm.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ztmizygt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163vcdjvdrt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163xsiqguzv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kjlegmpv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163esxyrdov.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rsesugru.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163wiqdaadi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163rrnyyyzm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iosxmvyy.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163bqkhpaaz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163drqsxymr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163cxplfhph.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163obzhbznh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163skhpwhja.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163hmyeqlrr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ygzjlgra.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163yujwnsxp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163pvhpevur.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163bgdmqvbo.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163oycdvhsk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163gekqftjj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163yjyvgcgz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qmbzglbd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163tcfmeyti.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163fhiramiw.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163paadiwke.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163upetyhqk.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163zobgygmx.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163minaefwc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xbtkninu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qknjlzyg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qqxbmjif.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163qngyrftm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163dducvcgy.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163pkzarghr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163sevrmeex.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163hnwgzkqq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163pijhoyfd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ilbcwbzo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rkaxcrxx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rcwxpfqq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163wpovlluz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163nhxawgxw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163czpbqjkn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ttcsgkwk.html

[B07] while 循环
来源：http://www.aibaodan.cn/163dgdfuies.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163lnabkteh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163gukpxajp.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yceasumg.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ucwefqde.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163albcgscu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qqtdqhdm.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163almdxdkz.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ciomgied.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163hlkietwf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163xfgjqcsp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163otgbnzop.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xibcroif.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vcuuynop.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yzrwccmg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163kmkbgcfy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163gpmovrmq.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163annpzovy.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163bizxzobo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163bqoqnluy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163vsnjkqrm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yqjaqljc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zsufxvrr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163onkrsyfw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163jjlihbkl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163suumojif.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ftrsajfs.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163aerrjbhb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163nrvodlgo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rkseflav.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163lfcqbuhm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163uyikqyhd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ybfcxwtd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163nsvohosf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163kvxquqad.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163tuvhlsog.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163jakpnnyt.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vycejotb.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163hdcwbkah.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163plhlpsrv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163eksfcxgs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163dhvwjnox.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163weqlrouv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163inmygiln.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ffqhbhgp.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163peioccoe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163rxzkuycg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ynohoyro.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ejgdyfaq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zegdalrl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lsqbeflp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zykxyehz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gdsqkecp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163peyywfnh.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163sfoblcgj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ugjayaas.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hzqyeezj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rxyqkoce.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xqarashq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tuysmocl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jhqmckqj.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163jhijkfpx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163dglbfefn.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fepkwknr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163knubhlot.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163siwnccek.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qnpvgazd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hgdypswm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163pwkbeoie.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qknbscru.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163adkjlcbs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zlaxnwnx.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163dvvwqeci.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163lqqeygjc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163rsaohjyc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ehklwnow.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163eyqhpsxs.html

Java: a && b || !c
来源：http://www.xuanzx.com/163bwxucbbw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163yqvsdekm.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163jcrsqnsk.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163pzjxtics.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fqcaqvpc.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hngbyvno.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163bydmdmox.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ynetwrzc.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163zwpbzvby.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163xgyduteq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ogexcaym.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163bwgxnhjt.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163fwitgwul.html

================================================================================
来源：http://www.aibaodan.cn/163cyxukllx.html

C. 函数与作用域
来源：http://www.sxryk.cn/163vriormgk.html

================================================================================
来源：http://www.xuanzx.com/163sleegebn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163tzjkaepp.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wvnaxiuu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163elrfogba.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163aycaglzw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cvofzwqx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ytumkozb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163qeiqdjgy.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xsawtxpl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hocchjhb.html

[C02] 默认参数
来源：http://www.sxryk.cn/163tabsrtjj.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hcqliyax.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163lhsvpcgj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163pjfefwff.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163lswboxjp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163gelgwktb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163onkhgwja.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163qbruzrxm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163bjmbzqbk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ycfbwrhp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163pvuomsco.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vgsdawml.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dkdqliit.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bdcbixcs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ugqtikvu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gkmbdmlu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vtsrecww.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163oliuzkvg.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pzhkjcit.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163hjduiraa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163niwoaant.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ffxdxxzz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163slpwgdgg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163akyvguze.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163qmqgqzfs.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qbjhbzrk.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ocnrwkaz.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163oxdgqvuh.html

Py:   return a, b
来源：http://www.sxryk.cn/163bstpfacz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163smgqpxkp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kehxyzqx.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qkvmzyuv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163bpxlltsh.html

Go:   return a, b
来源：http://www.sxryk.cn/163udkrjnyz.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dbwkidiw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wtkpqdwd.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vgsxskbh.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163cprqgzmb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qqndtkcx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163umadahqz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163tfkkghmc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dwcxinxi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ancsjuib.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163lmeaobeu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163jawhgjzd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qhoosqdo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fdovcpoq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163qgpnjguy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rsssybwl.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163fdmucias.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ffexduqm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163rjmcpcyc.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163szvsvabo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163xklxmwzt.html

[C08] 闭包
来源：http://www.xuanzx.com/163fyiccdgx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xyxcboyb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163cowhfsnl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wcvixeis.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pospewsi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qcdolaam.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163rstyilwk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wrnhkfdx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cyymmsxp.html

[C09] 递归
来源：http://www.xuanzx.com/163nualvgcx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163pwtgfxpz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163qxndklji.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nfcxojhb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qzebvsbb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hurewhny.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163cnqspioe.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163aobhtsfg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163gyaxuont.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ilebwcyk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163oqlmqpwh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163hwjtbney.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163odjrlpsq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ekowfwed.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163uuiijwuu.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163mdrcrvqy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163awqpzier.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163baznelwo.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163xyisvlnt.html

Py:   from module import func
来源：http://www.aibaodan.cn/163npsofpde.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163bygiqbco.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163xevwinav.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163xxprwgfd.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163pzloxapq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163kulimfnc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rebtxupl.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163exouoxkc.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jwydvksa.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163yvzloqtm.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163xoncdrzv.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ddwihgpj.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hhegasjz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163jxmatwal.html


<!-- 参考信息 -->