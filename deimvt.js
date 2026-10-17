外链999!wailian999！

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163guqsbycb.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163zgqamsls.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163utvjzokp.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163gjyiditq.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163epljhxlv.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cgsfuwav.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163fzrgcysm.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163zhubcayb.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163inyklbmq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163opjtebpq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cpxpglfh.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163lpibquqd.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163dxubfauh.html

Py:   len(s)
来源：http://www.sxryk.cn/163ilmkjxwc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163jajykogu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ivzgfmzk.html

TS:   s.length
来源：http://www.xuanzx.com/163gyadgytz.html

Java: s.length()
来源：http://www.aibaodan.cn/163xdaxleio.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163fzdcuhzu.html

Ruby: s.length
来源：http://www.aibaodan.cn/163geutgxkl.html

C#:   s.Length
来源：http://www.sxryk.cn/163bvyrlgqd.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163mmviaeul.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163wfctwsaw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163vhtiqdcr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hmppfwmc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dgwlvaam.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gyefjten.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163rthkssmz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163qptijcmp.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163oaoelfgx.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163qfdhydjm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163vynqieoe.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163famdfgug.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163rvnpeczb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kszslbaj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163navuqmrq.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163keedbmpp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163jeniycxk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163gsovfonb.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ohznyxft.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163efxjfuix.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163nwusvdln.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wccxmgja.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163toylonsq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163lphkqovs.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163gphjqkhy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163hqpgmrcf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ijevkzds.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163oqwrscdc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163cdqkrpzi.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163wouojrtl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163tfrtejfx.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qxveroea.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163kwlvqosn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163kwmpuorr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163jwqyktjz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163srellrcl.html

================================================================================
来源：http://www.xuanzx.com/163ujmswyom.html

B. 流程控制
来源：http://www.aibaodan.cn/163bpywnjwi.html

================================================================================
来源：http://www.aibaodan.cn/163ehkxvpjm.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ebtgaqux.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ciztzubj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163kdmgdspk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lultuhrs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ufbcbvic.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163luvdxelv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163vercdjoh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163qrujjsqs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zpmexvue.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163yovjpgww.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163xvdaykte.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163pcntuxsn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rzyybogt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wlcthklk.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163foumidrz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163tfflilwe.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163soeckgge.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pwnjlkji.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163inahzypb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163fqgdlnxg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ulxejxed.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fcapxjpw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163yjzzrjxh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163kuogvxru.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163rtueslit.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jdimsbsu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hvoospzu.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163jacilcfv.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ayrwdtks.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163xvdleihc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163faizaoba.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163edsnlfzw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163eodjjmik.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ghokcxjs.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163xahpulfb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163mvmeevtf.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163bwmpwcwf.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163houzsodc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163cbtovzqh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163myvnzrrl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kavjzwdp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vnkngjjb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163altjogol.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zyhordlm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hzmlkasp.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163zeebvbjv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ehdgdokn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163iyofgyrp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bmowdjsw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qxyzqhjk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163jtwrvqft.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163rezghype.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163wfkpnksm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163efhurtmo.html

[B07] while 循环
来源：http://www.sxryk.cn/163ygwqbklo.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163gbezpost.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163cqpiogrh.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163grkshoov.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163orbtbvqn.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163urfyqfzq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163mzdxqzyl.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163hjuxhwgg.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gggbkopo.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163voqeanri.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163mtiezmlh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163iebnoiah.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163votjqotu.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dsvbclch.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163akkpyxih.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163kuxehhyh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163sygygdiq.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tuvvrhdv.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163cwcbasxt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163pbonftwu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163kcpwvoxv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hjotxhqp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lqtarudi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ruetkgaz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163wpmmlyqw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163kusyegme.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ltsmoeea.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vofkzmej.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163jultnygo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163cixrrqrj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163rqkpzfwh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163bzlugmgc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163agxqukyu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163bspiucpd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163rnauiaoj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163opxpoycz.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163lkicswjq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163iomtcril.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163duodhfxa.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fhciuwtc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163clbernfs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ezuvwudd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163blkqwlec.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ortnqbtj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163vnxlzqta.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gjjbqesj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jxpepbut.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163oygqxhld.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163czekxtjt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sqmxksdi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cpqmmssp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qvkmsnai.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163otvchojc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xpugyryd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163diavoboc.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ntaacspz.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163irdeyagg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pkenrnrp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xbpaleqs.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163carwrvcd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163wenviolr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163xwpmtfhl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163btgndsqi.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163xzsdbgih.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163khxfkzgm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163qtjsqgaj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kdytolkx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gfyiiogo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jejwkhrx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163rbchehmp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ouhowzhz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wwadshln.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163eltaghjx.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163fgbsqxxj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163levkfpap.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163myesagzm.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163gfetlsfl.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jeombivb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163xzvimook.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qeshlnvf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zqjuplfa.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163klvoeuiq.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163fssdcoev.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zxkugjmi.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163trxdwszq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163locmpfgx.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163whyyyvvy.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ocykmgef.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rbnlxqyy.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163dgtfboku.html

================================================================================
来源：http://www.sxryk.cn/163yfpzsram.html

C. 函数与作用域
来源：http://www.sxryk.cn/163jcrvjezg.html

================================================================================
来源：http://www.xuanzx.com/163chuvxnvz.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hkqskmnw.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163cqsamlcz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cunydfrw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163btfugrpb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bgjnyhbd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hbfjhusm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163pvovoppo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163jdszycpa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lxfifqmy.html

[C02] 默认参数
来源：http://www.xuanzx.com/163urunhkof.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163yylmofbs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163nbcglrbb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163kmiplvfw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163xoiwunkz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163tsboowfw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dqjslahv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163qlssltwe.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163whxlhmie.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ztjhsbgo.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163cuhntvcx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163yglspskr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jbckpxuj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xyzhmhdw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qggvmvpm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163beeyruic.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163wmoijjsm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163qaisfdxs.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163hrojajfq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163dmcyywmo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hrhqhgxl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163sfagzugj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163bbsyhpxp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163xdpqqvmc.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kulseexo.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jmmmfrsr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jeospdnl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zwogeevx.html

Py:   return a, b
来源：http://www.sxryk.cn/163ropcbows.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163sgjaygrs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163xdhmcews.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163byzoslve.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163oluwesrh.html

Go:   return a, b
来源：http://www.xuanzx.com/163unnkrzuj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wkiuwrsl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163niclrwsd.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163veqgddvr.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163dmaluxbz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163mkvocoiu.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163jtuzxokk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163olodwpfq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163zrjhicvh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163eeunzebw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163yqnkdxmc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xagqksdm.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ardmvhvy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163kruwuirl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163cklntquh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163acpyjukp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163kxkgkhfa.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163hkfcnhdc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163uadsqcuc.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163msepsono.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163xgghuzlq.html

[C08] 闭包
来源：http://www.xuanzx.com/163ejhdonhk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163uesxabqy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163twchovde.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hncmeddl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163adpioodq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qtmezpdx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rzdmzbke.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163quthqxsv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hkmxnjit.html

[C09] 递归
来源：http://www.sxryk.cn/163vsnopzyl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163rnewvigo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mkyqrivx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gafuovoh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ztcjkkvw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ruuambou.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163fjfspqpo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163amygmrxp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ltjsmyvj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cfiunavc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163bnopkpbf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163klzgdcup.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163antkddyo.html

TS:   同 JS
来源：http://www.sxryk.cn/163bgyodtyf.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163laiehfak.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hzogkisc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163huyzhvhx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zdeeiraa.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163tagvrxau.html

Py:   from module import func
来源：http://www.xuanzx.com/163laggfxrx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ypdbgdgh.html


<!-- 参考信息 -->