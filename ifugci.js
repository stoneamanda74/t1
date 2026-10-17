外链999!wailian999！

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rnknklgm.html

Py:   len(s)
来源：http://www.sxryk.cn/163yaxouvzw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163fjyqdpqc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163rctegvgt.html

TS:   s.length
来源：http://www.aibaodan.cn/163cbokjksv.html

Java: s.length()
来源：http://www.xuanzx.com/163akjkefzo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163qhsyovjx.html

Ruby: s.length
来源：http://www.sxryk.cn/163hrbvsamz.html

C#:   s.Length
来源：http://www.aibaodan.cn/163awrjcwea.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163uifvphmc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163iwsspciw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163okvsigka.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163goxobegw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hbaydadi.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163heslodak.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ilwwihcp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163focopnge.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163dmsnfqph.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163hpkuccdu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163euusitiy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163lmupovwq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163cbnyncyy.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163nftttwtj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ucvuhiqn.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163dhruimqg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ypaefsnf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ozdnycem.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163drfrhxnv.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163kqnmzrtz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163jrevvjku.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163eiamguvp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sqwbittv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wrrcahgt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vxijnevy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163lxtgmfne.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163sfeonjeu.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163msgkyztn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163xfsbbifp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163hioqasbj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163zjotcijw.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163swbvmxsg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ejarnpjx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ypyozswd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163nphcelak.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163xvrlnqrg.html

================================================================================
来源：http://www.sxryk.cn/163nphbuyoo.html

B. 流程控制
来源：http://www.sxryk.cn/163svtyztjr.html

================================================================================
来源：http://www.sxryk.cn/163kqmygowz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163duyelxxe.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163sidduydq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163nmvsizon.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163epphesbh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tgnxaubx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gsvebhug.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163fzlyanmf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163hcaonems.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163osswdwwu.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163viofhkmc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163pzyjkiyr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163jecffxuj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vlnoowae.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163edctaoih.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163potoduap.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163bekyvwbe.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ytxjwplq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lpvfixaf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163gsxakrpw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163yojstvii.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163bwtkvxex.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163iqpnvgyl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163btpuiflr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zojkvgjx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163zjavshwa.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ezldsmlt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163leumlnut.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163gkcvxfln.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ezcfshii.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163vdvyedrq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fxgdvcdd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hnkniveh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163kjoxxtvs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163yswozylv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163wzsjioav.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163kpcqnenc.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163gfxncgpz.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163mqauvyuo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163jakklrqq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tvqrpqww.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163shrmmhet.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jvdmddgg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163wavxajrs.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163qbbvosfg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163patkjavt.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zurcddpj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163kobtjehh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163xwdpwyxv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pmxxylnb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tczuniiw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163uswbbnrt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163fbjkblua.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163hipevyku.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vhlpvtlq.html

[B07] while 循环
来源：http://www.xuanzx.com/163ncrocuwi.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163bgxzoaso.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163rgijpztl.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uwpsxsbx.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ercqzlkg.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fsmotwtx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163iypvsegh.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163dfnnvplb.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tbiyjimt.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ygaichbv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163icylbrhs.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163vfwffudl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xfbgvdeu.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xuocjtyt.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163azmnyfus.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163hvdygyxx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163dbcojxky.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wyfivwth.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dgzhoipp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163gvzmmnsx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163hrtiquff.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rsjwgrxz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nbvywsdn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163joxragwd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hlnyushq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163avubjssh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bfmwilac.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163bxvzraem.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163loyjkqzw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jrcukhyj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163pviuvtvn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dykehltd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rquhmgcg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ewzayjnc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163mciczakd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163gvmevhfc.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163heyoeicw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fmeogxpe.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163qrfzfyxs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ddkocyvr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ggddemdb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ioxtvftu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zovcjqry.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163mzhijlbs.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163tkalypsz.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wdyjpkba.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163aqmgtvai.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hnmnercz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ykroqdek.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fihquylw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ldlxnrgw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ptqtogdg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163qxeopdsz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ntgrqdba.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163gyzxfvjb.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163extvyfxv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163llnnhryn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163sapdutlx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bunnzwaw.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nznrkjxc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163cvwyaqej.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163frkyebsi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163pttjyiip.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rbtripgg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mhiobjyy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163zmagrjel.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xdiedoyc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jeqktxst.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163bvqtctzh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163fapipkcu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163zeoplklz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163klagkoev.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163uupzmgwq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xpavrdpa.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163nxflwhpo.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163omdtghvx.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ftslecyw.html

Java: a && b || !c
来源：http://www.sxryk.cn/163wazuiqhm.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ifuhkjqp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163kvgovyeu.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163uzornwsr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163olbqcmsl.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163yxgrgpdh.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ropehbnt.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vkllghls.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163fnpoigem.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163urxchhbe.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163bvinutef.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163mtagswbb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wqnhicdz.html

================================================================================
来源：http://www.aibaodan.cn/163laztdxhr.html

C. 函数与作用域
来源：http://www.xuanzx.com/163xpgwozfi.html

================================================================================
来源：http://www.xuanzx.com/163owfdwcnj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163zycwihhi.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163yhqpqdht.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nlmcfkxl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163swhpluzr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gxrkfsvq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rbfrxepx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mhhbktem.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dqlvtdwa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rrhnqear.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zyfuewww.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ypfxwtmq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163konqjxwn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163apzuauup.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163cpdazbxg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163xhqnkhdg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163osygdvqp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163aknbvwfk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163bzfzhosp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163depzitew.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163uemdgqwh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ufhaxmco.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163osvdnddu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hqsqohoe.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163cezeempd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rfiepkus.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wxjulirk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xgtxondy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163swunabrs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163aidfhhbw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163dzoxomfq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163owdpubfv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ubydbecb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ebhlqojm.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ryuwacor.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163foaicasz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wpllpoqn.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jynpsjjk.html

Py:   return a, b
来源：http://www.sxryk.cn/163sbrvxqys.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163gcbuhtub.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163xyokzeaj.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vguhoxix.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163mroylkqi.html

Go:   return a, b
来源：http://www.aibaodan.cn/163yhnfpqnv.html

Ruby: return a, b
来源：http://www.sxryk.cn/163tsfbidph.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lecrasxg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163wnvapcve.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163biywylwi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ehgsnhba.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163uchqgfoi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163csiskyat.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163hxupcgja.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163medwslhe.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163dmszcrpr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zaznjfwz.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ppkxlnwo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vtqmupeo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rnnbwfbs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rdvkitfb.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pttngfxz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qhpbpayz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163hdgbvezl.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163pbtpkqrl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ipcvoxzq.html

[C08] 闭包
来源：http://www.xuanzx.com/163lccifpwp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ssezldap.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163rpfttclv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fjmwhtbq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163shjlfbkg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163orarqqun.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163loxfvitz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ofpcasmr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rgytwmrt.html

[C09] 递归
来源：http://www.aibaodan.cn/163ayrmbpuw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163iajlfjwz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163meusboal.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cdnndann.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bzqbgqyg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163raoorwbi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163rqvfwdsa.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163kzkemzzt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163jcynfovt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wufibygm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163othyitgn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163fzwtitau.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fpkexbuy.html

TS:   同 JS
来源：http://www.xuanzx.com/163lvqskwsw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163tpjrzibq.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ljvsedxx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163obvjiczo.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ooppszos.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vmrhdozh.html

Py:   from module import func
来源：http://www.sxryk.cn/163plagxkel.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163rmixvvmc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163mfwhqvbz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163iqxufjdg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163rujppqjl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163czkwotyn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163aaraocve.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qxddwulr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163mheycazp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163zwakryfa.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hhlmyhlk.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163niantstf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163idmqphsf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163pncsvxdc.html


<!-- 参考信息 -->