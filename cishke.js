外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kezynucy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tbnfirmf.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163uumbjjfw.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163zmyfugym.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163cmreiwjt.html

Py:   len(s)
来源：http://www.xuanzx.com/163hxdiiafk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163sdexvnjy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163btlweawq.html

TS:   s.length
来源：http://www.xuanzx.com/163dagqsnny.html

Java: s.length()
来源：http://www.sxryk.cn/163xctkjlvb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163tpbizssz.html

Ruby: s.length
来源：http://www.xuanzx.com/163wkcooqnr.html

C#:   s.Length
来源：http://www.aibaodan.cn/163eqqwlmqn.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163fvpevxrz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163wojzkdkr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163tmsbfgnb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hlsthchg.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xmdwxkci.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163uaohogdk.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163fcwxtoai.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163zbtzosbd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163rgrdlkuv.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163zlpvopik.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163vvwiqvip.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163eyztoegi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163bkqtgpzz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kwozljlr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163jsujnuep.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163lwfcmdkj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163hpsillye.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ciirzwpa.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163smdbuhnh.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163bxkcnzdx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163nzedvgye.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jkuxbbny.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163voxfneeg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wjbqbohv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163csvuvqlk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163yrdutgze.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163kbwqtkci.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163opzvplaw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163vznuimya.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163enoxtapg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163tuzfwkkz.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163evrjzyhs.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163xgyskzpl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163neiypiej.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163oaibcjyg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163oujnvzhy.html

================================================================================
来源：http://www.xuanzx.com/163uohaqckq.html

B. 流程控制
来源：http://www.sxryk.cn/163znwlbkok.html

================================================================================
来源：http://www.aibaodan.cn/163gnxmbsdw.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163iztdwfmh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163xyutwhxr.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163dnxcqohe.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163afuxwgxe.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ndvodocl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wgblspab.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163nsrdyzrg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163glggooyq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pafeckci.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163dfbiezyz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163mfzgntqg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163zynbcwze.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oyqffvaz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163llwlhlze.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gijlctcn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163czcdfirg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163csqikzkk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nnkvzcsr.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163undygayj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163hddcvvaw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jbmqyyit.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163flvnlxcq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ajexzdcs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163dbpsykwi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163getxuqgo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163woxkyykq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163nqcvulgu.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163swsklzhj.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163sjrfphzl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163dehiwjji.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163aczjonjc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163taadmblu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163pncoyvyu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ztsvjrye.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163mhszbdbu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163kggiwqhk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ceixkysy.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163hmconkqf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163utbekrtq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xjslkdaz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rnpbsyvh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163uitlzize.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163yfpcsumj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rffdvmhq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163zupofhdo.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ifmdllqn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mafesbny.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163qwmuwnln.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pcunahho.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jrrtbkmq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163omjcsnci.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163kqwvsgvm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163datstidj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163qcbtxuyk.html

[B07] while 循环
来源：http://www.sxryk.cn/163haqwjsie.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163onrfddld.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ggrsbefi.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mdxusnlb.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163exuxbdul.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iosjygfm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163acbzkhzr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163sbjnqqax.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fxnfigjx.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163fkysraex.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163lgobsfdg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fipvnncs.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xwbuzywp.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lblvbkti.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ewasmqnt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163xjdhkpkk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ocakkvhz.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hwqarvuw.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163cumhuhgm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ilyujvko.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xqphnhjr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zzvvpcej.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lwhbypvi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zoqztpuq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163lnrcbwbk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163yjadwbbh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sazjbfrm.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163jwmbeqak.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163vmlrrlrc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163zsaezoon.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rtifranb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163hvglcand.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163zjjepdbz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163jkzwktfy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163oqinslsd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163rjxavpzf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163zhhtrjcq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163eaornyxq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163nfbybrvw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kzwwujmm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163objjzbvb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163wrtqmgez.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ckjeehhd.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fpjkuogn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163kuefapvg.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163czjadenk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163gdhplqau.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163sdgsbopi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kysdvvcw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bxfsiwoj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yrpnlqyq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kpkzeppf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163qferqrer.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ditkbxrh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163avruwoln.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163humulxcc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163isstosmj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163chseiixu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163iekiqopz.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163smmxmydp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ksfogceg.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163zowyaqvo.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163wynfouvv.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163hdhzgxwj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163jumrjsiw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163jqwqdqmr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rivunblb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pzfzejsj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163iiepwkug.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ritbkvzv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163uzgjwwzb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163dhmmngzh.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ybkhkkxw.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xfzqtgpy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163rqiqiurm.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163svwssqzq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163aikpsvqn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ssrubuye.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163hrmrxsah.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163iqcionby.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163eniftbfx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ofytddhj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ffdeqpll.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163yddvgbac.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vaedluna.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163klspsais.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163lkeslesm.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163lyhfrqwy.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gbpmaxzu.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ajbruqsx.html

================================================================================
来源：http://www.sxryk.cn/163accxoyyn.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qtbstwzq.html

================================================================================
来源：http://www.aibaodan.cn/163yimurxbt.html

[C01] 定义函数
来源：http://www.sxryk.cn/163tikylmmd.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163woxmzzcj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ndbndiqz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163jjvjwrfw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rmgljwfw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ontsdgas.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163bahjtubn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163eisakwju.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ukiuocva.html

[C02] 默认参数
来源：http://www.xuanzx.com/163tbclpqfy.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163wpoxidjd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jpprifmv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163uremjlbc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163oizakkhh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xdcpdupa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163cnpirjvz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sdeeweam.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163smryrujc.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wnpascke.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163bibpuaqu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ypfwgoxb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gouooswo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163usvrgxiz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wiayfwir.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ayqxtglr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zvonoebd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wiqxynlf.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mwialiit.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163yrdkqhqi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ccicgplz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163yylhxkey.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ajlcojan.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163qrhuhjzz.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163bitqteop.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yelhivuk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nxivtnec.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163itaeequr.html

Py:   return a, b
来源：http://www.sxryk.cn/163ukhaatbj.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163qssorftx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163cuaylvxv.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163rthahyms.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lqxjzddi.html

Go:   return a, b
来源：http://www.sxryk.cn/163fdscjspm.html

Ruby: return a, b
来源：http://www.sxryk.cn/163aazvhwnr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mmdjgtbv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ulirzodw.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163buxuihgg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163noatnifs.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163lwxcmncp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163lsbbflhi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163cufxeaqn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163lmrawxbi.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163tgufknge.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163oaxifdth.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163cucaqjhp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163avrhujem.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163cbjootms.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163wrsqcxbo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163arjkghrz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163rzefacjk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163arvkbair.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163uofiuiey.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163atkuewhd.html

[C08] 闭包
来源：http://www.sxryk.cn/163dpegfdyg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tmwsfjql.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ugqnguem.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lkvrbzon.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pkhpqhtg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fzhfmjwh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163kxgpsjxs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wfjiispt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yhqbdneg.html

[C09] 递归
来源：http://www.sxryk.cn/163nnzhwykf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163hpouclym.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163strjhkcg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xsmfbkkv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163npekgzhb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163jpeobbzd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163yxatumtg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pmrkpxgz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163pjezaady.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163drtxihbc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163okofilwv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qibqngom.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163aheduexc.html

TS:   同 JS
来源：http://www.aibaodan.cn/163lklrkcja.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163djajbley.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163debpnswz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163lrcpznbd.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163cptucqyc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163mpzcbvgm.html

Py:   from module import func
来源：http://www.sxryk.cn/163hvqqthaw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163dzhwseih.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163amtetsrd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163kgqgjylr.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vrqzagfl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lnfcdjde.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163iaacgjkb.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163tlikmqag.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163gnclhjpn.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vqnxdndr.html


<!-- 参考信息 -->