外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bfhtferg.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kctsecva.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yvcsoesu.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163tqjqcahj.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163uwoffvnl.html

Py:   len(s)
来源：http://www.xuanzx.com/163lgylvflf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163jktnwwwa.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163aujfvqmx.html

TS:   s.length
来源：http://www.aibaodan.cn/163yaiekkjf.html

Java: s.length()
来源：http://www.aibaodan.cn/163mknxvnuk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163teszrmti.html

Ruby: s.length
来源：http://www.aibaodan.cn/163hrnejyoo.html

C#:   s.Length
来源：http://www.sxryk.cn/163yqplxpfr.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163jfwafvue.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163eefajsek.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163yobudlhv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wlqvxazr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zncwtphw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163kqlmzgfj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163gwsdgtgw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163wykwqjsh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163cmhhvfoz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163hrqfmyqo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163woowwkvm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163luxfswzq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xomdrbey.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163xsihsqnm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163yaaldlof.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ldvleqys.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163gqqgwhtb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163tzxmuejf.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163zicoeuos.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163hvxfiyoo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163ldscluss.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vwzypiql.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vitkjbnd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163lpvtakgd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163runszwdg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163bmyeccnq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163untckvsp.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ysbygbbe.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163pojuxgub.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163uvebdmrs.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163wbqmiwnz.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163nsqkihlz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163nlvrgsfi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163ykpkwljt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163bdslqdcv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163rbaiskmj.html

================================================================================
来源：http://www.aibaodan.cn/163intrjrlf.html

B. 流程控制
来源：http://www.aibaodan.cn/163mzedicux.html

================================================================================
来源：http://www.aibaodan.cn/163vyzlwmgz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163fkjvlzhb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163suubvlcv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163smypwwqv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pgberudy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ebavauyn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ktgxlnnc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163gwfpzvux.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163xhrozqid.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xcvidgbv.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163raakkuzn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163qxdulbbz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163qnpdjrfo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uxcnhojw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163viqeolgc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163emfkxnmv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163yjukoeyl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163amkhmyrv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tkbqizxr.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163mtvjnewb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163hwlqfmsq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163arfahhes.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jglrqgxs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163streevem.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163obfipuup.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163enulwszx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163qbiiwomt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163tqhwdfhg.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163bezlbrpc.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163tmhcqeks.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163cphxtclc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163rclbibvs.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rrtxdggn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rygkpjmx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163ktdahqnc.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163inovfgju.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163lflsctya.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163extpdqez.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163fknndgnl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163nvhouvpr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ckiefhqv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163bqmjdzax.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163dggptjvs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ugqvmdeb.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163wxrredcn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ewsukrda.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163xskyuyjk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163iftcttid.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163nwjymwcy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163kbjlsknj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163klywjgpb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163kbmyzkkq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163iczlbcac.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ncmarbrn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163gagheckh.html

[B07] while 循环
来源：http://www.xuanzx.com/163klebhtat.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rzxmkjnk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163fbyvntlv.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hhzdsnhp.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163squthucx.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163umambine.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163vsaayeoq.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163owlmigkv.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rxkajgix.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163otbjdjir.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163jgnbkvxr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163gxlbsypz.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163idhmvrwg.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gpguzkct.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jdronzpw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163myqorkuf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ltryhgpf.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pmctambu.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fwdgmzrp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163addyjcvk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163naxmhdae.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nknfwprn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eqoxydam.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uklztlch.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163akrympyw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163bwezmend.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nqcfwkky.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163hecvndmq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163imllgvuu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163oldlallx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ujkiinsn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163qsszimgz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163gdndttjh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163wesfqfik.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163smvnpyfs.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163irdwyxcd.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163addcxvuy.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163eowjdmyq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kqvgugdo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163twchgfsk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tjtbcqxq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163luehobyr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163lzrvrawz.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163pkwpgbcx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163rwttzehb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bbkhxodn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163fparvval.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163cdpspplz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kxzsoxuz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163penfgwzd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vwzvryzm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ttwfhmxk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163bcylknza.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163xstsvlzn.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163mfmzowum.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163qgqxspsi.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tczauvfn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163buetvydw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wjrsxpxb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163hwqqtqod.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163saxkmouo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163uacwbgtk.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163xksxjskz.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xbdguphv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163imuewbgj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163idltdcwm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xsmdjjqy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xvjabpta.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163hhuyvuuo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zbcyvwir.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163dxrfnzyk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163fjtfgoiu.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163mrbnlvnz.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163lfpxheqg.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163nqewrqcn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ecybbgab.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163hvnidmgj.html

Java: a && b || !c
来源：http://www.sxryk.cn/163dfeuycxt.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vjwokdgo.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163emyyxtcz.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163wivochhh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163mkfmfpxt.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lzhjofot.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163dwtgsxqw.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pifcomyo.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163rbepyutp.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wuwcygyz.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163zgdhswwl.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163gextcsao.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163uqzcwekg.html

================================================================================
来源：http://www.sxryk.cn/163djefziis.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163tczbdbhb.html

================================================================================
来源：http://www.xuanzx.com/163wbzeenpq.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163mwosshov.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163wqjnbskx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ibpwjpkq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163oisnflue.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mcsyvdti.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tgdxmlch.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ywfezjaz.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163cxxgpiox.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tvstlrlo.html

[C02] 默认参数
来源：http://www.xuanzx.com/163pcdhgzns.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ktwsruzu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163lcqwzcbu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163sbsqkxem.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ladarvfl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mmbgnakw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163cvsophus.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163qzhhgjim.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163takuaihu.html

[C03] 可变参数
来源：http://www.sxryk.cn/163zxytfwcc.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163giurmnpv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163czkdipgi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nxnrsgpz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163pwqpbfrf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163lozvxflo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xnnyvunw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fuulgxev.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163olcwcwob.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vdmooksq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163imsqmzfd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zltoxizm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rtfldgee.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gtxfghoc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163uczglpwj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163lnxriurx.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gjhxxsmb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wyjnibpl.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163pmdqmmxu.html

Py:   return a, b
来源：http://www.aibaodan.cn/163kutxwwbn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163wmcnnktu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163hjulutqu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cwzadxjk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ggftfwqr.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ffpagzlx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163rckvwsec.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xzzenitr.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163cmsxgwkt.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mcmvjlda.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163stisvsuu.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163iuuabnxf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163tiqoflwg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ndtmfbzy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163jnluveas.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ntjdtsdx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163pqiahcxf.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163itxqmupq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ygoluonp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163fdxfqqyg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zxvmoten.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ddadczyg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163vfgnxtln.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163bqrhlndd.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163tfgzlrjl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163aclungmm.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ohfsjlbl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163jhtrmpav.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163mcniceuo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pjulxgzd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163obsagcfs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163pgfppafv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163hixnyzaz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163rwfrmglx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xkbixcms.html

[C09] 递归
来源：http://www.sxryk.cn/163mvtishno.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ohqqndyp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ryhxelvr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ghfkvtwu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163urtxrrib.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163mrdgzfww.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163alxgxwla.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163oqsbcfbh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qmkiyrmt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wfalcaic.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163znhrminv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163opecesfe.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163jyjsacar.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ebvegaql.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fseoatlg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163cuxtkkqm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ictwdakp.html

C#:   块级作用域
来源：http://www.xuanzx.com/163vmnxnevx.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lklhzykv.html

Py:   from module import func
来源：http://www.xuanzx.com/163lpkddrlf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163rbcvobba.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163wvhxeceo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qptpowjz.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163figpfefn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163hbdxuagl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163qrvnykna.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163wdvivndt.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163zvzuxpft.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ojuzaxjk.html


<!-- 参考信息 -->