外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rtfbfdnx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bhycxpfw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163urvxyrkj.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163bsyhtslh.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163kqvcqihd.html

Py:   len(s)
来源：http://www.sxryk.cn/163wmawukwg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163pbxdwpvd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163hoxmtdnu.html

TS:   s.length
来源：http://www.sxryk.cn/163cjplcjyo.html

Java: s.length()
来源：http://www.sxryk.cn/163dxhzaayf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163tzyyecjs.html

Ruby: s.length
来源：http://www.xuanzx.com/163etsrexyh.html

C#:   s.Length
来源：http://www.aibaodan.cn/163sbvubgde.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163tpzqzrfx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163byemlzhk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163wrkffiyo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uqfgxtke.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163sdfaxpeh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163biendgpo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ronrvgqx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163cgtljqnc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ipjaeamb.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ysnplzog.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163kprqddjw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163nejsatkl.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ghlawkfm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qxeuglov.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ovmormvq.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163dwkmczmk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163zihqljyi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163tprgwhjd.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163iulslgoa.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163qrytjzma.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163uqyqnnts.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163efmlzeym.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mzpstrtf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163pacxjiqa.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163vmegqwqx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163klgtheub.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163lyrbmfzm.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163lguqhzsg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163vrixruul.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163qkznnnee.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163dpyohxlk.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163halxuvjk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xwemzovh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163nkjgixzt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163captcwvp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ststulmz.html

================================================================================
来源：http://www.xuanzx.com/163cjiprbtt.html

B. 流程控制
来源：http://www.sxryk.cn/163igwesidt.html

================================================================================
来源：http://www.sxryk.cn/163pcutmmxo.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163zcxdbxwv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163rzyxlmva.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163swdravxn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zwysouhd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xapnkrul.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163srtyxnho.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163saykuzoy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163vprsjwra.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wnvnvkwi.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163upnkksoa.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163vnhjulza.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163zmosprbf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cqglbwli.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xhpfesqu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fsyofuot.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163bhuswbem.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163zaptixqk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qiybqxdb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163xlejsdhq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163jqosuijy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163kkusugls.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dgptnlxs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bcupbpva.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163pvptgizl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163hesfttsz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zvnjshen.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163caekzszd.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163vqgdxigf.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163dllhnosk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163igzedfye.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qyfhasyl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cmtdgatd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jdqifpvp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163kcxhklqp.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163wlckgyhl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163oerbyrhv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163khhwedfn.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163zcuznomj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163lvkkjjyp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lyopcuuj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vjuobrfb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kbuzqczl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163chyjxoaf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163wsmgogxs.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ngugqrjv.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163bjnhbtez.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163drzljqaf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163jiuorjji.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rczfawfv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ysfdfzmm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ungybzts.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163pcrntoxk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vdkgnxrw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163oyyitaro.html

[B07] while 循环
来源：http://www.xuanzx.com/163epndulyk.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163lrojitcz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163logwmgmo.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tmfkqtfc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oexnqura.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mrjdrzqn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163exdepcma.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163xwtfwdkz.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ffpkdduq.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163itxymdty.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163qnmgtpvi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163wiccdvst.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jopevylx.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163koepndzp.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rwwggodi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tjzfjpld.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163jlpxrbqy.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nehcbphp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163fvmnrwah.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163xtljtxrn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gimkoazx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hnjipzna.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tbuyumby.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cwqgtgzn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163alrwheyu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163dbzzlpmo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fgzbkykm.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163qjcibgcj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163knnycepz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163lwqtmysl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xdhneecc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ugnhmcfr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163fphoxaml.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163dsbsotpm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ahfybvmr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163lizrjurn.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kzfpudqb.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ghjntjzx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ddwnonxj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qhsogckb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vuadjxpk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163fznsshyv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qpptukct.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163gmonjiuy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ltpheycs.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wnhgvyhx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163dgbxxmrq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163bpjuxleo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gakonuae.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163anbecvgv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nrumfcin.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nuuhyczs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ooldraib.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xqenryxd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163yiksmyzn.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163qwjaibsz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qwwdvfjl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dqpewywg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rpfccbhy.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163qhxppbiv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jyvknlqc.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ihoskuia.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wkhlcjxw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163coigycoc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163cpxxfujw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163wgunwdvr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163birnlqfv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163efueopei.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lrnxulmz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163wwumcqok.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163jkwarlfe.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163itvftwbd.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163cncplmqg.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163sarngtux.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jngtzwnc.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nfxaaxwg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163hfxggqij.html

Java: a && b || !c
来源：http://www.sxryk.cn/163grtlkbtw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gzrosuhz.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163chbhsjww.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ddsdxait.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163pyccdyui.html

Py:   if not data: return
来源：http://www.xuanzx.com/163aqzazehz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cfwqllaw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163uympoeqa.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163dotrvams.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qflookwm.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wxsnolxz.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163zxoklkqz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bjmifyhh.html

================================================================================
来源：http://www.xuanzx.com/163fzwmkllh.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rekublly.html

================================================================================
来源：http://www.xuanzx.com/163mflibezc.html

[C01] 定义函数
来源：http://www.xuanzx.com/163aebcjdzr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gqogofhm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wjkxxgwf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163sdjtsnez.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ogaomgvq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163irtlvant.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ttjbrxoj.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163uodkvotd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163orokgrke.html

[C02] 默认参数
来源：http://www.xuanzx.com/163qgrrobir.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163sbxwgrmp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163sgjqfuwz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163aewbpvaz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163npsdrfqy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163iyopqspb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ydigjctq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163tmxcfdbg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163mdtxvyxn.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tnnmwouc.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163wytubncs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xmzhafog.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hpiuepmw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qbbzwkrt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163bwnvkyyh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163nvlxrfiv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163utptxcnl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163prqxfysr.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163hipgdrkn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163vwjcmmjn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163atagomau.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163rchddzde.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163bkojwzqq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163kasicfqa.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163cdoxfbzr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wdawbmlk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zonmrdrn.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163owbgyqdb.html

Py:   return a, b
来源：http://www.sxryk.cn/163ctogfkpc.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163mfufvdds.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163tfujajhi.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ksmzpwtg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zlwxtkeg.html

Go:   return a, b
来源：http://www.sxryk.cn/163udcftndr.html

Ruby: return a, b
来源：http://www.sxryk.cn/163zuuyphfh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163zzursiwp.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163mptxisup.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bblgahbk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jfyczmpd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163inbdefgd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zwijfprp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kymojxlu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163jxezbhfd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163krvgglce.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163capralhd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163nzslpxqw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tpcuuwlk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jwvhkhjs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163myoozbpx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163qdintkuu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163qmzijekb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163trrtxyyl.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vbanvynm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ddgiguwv.html

[C08] 闭包
来源：http://www.sxryk.cn/163wkoxnhyz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163urtablla.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ddfttemw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jrjwsyau.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rkbnblpq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ehajphxu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163mykadutg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cfftmuaa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bvkbfbgq.html

[C09] 递归
来源：http://www.xuanzx.com/163qynnszkq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vqhxbuys.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163gyjdrydp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fdpvvcov.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vvezxqxc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163nevnvxxp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163fxijptsp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163sbpnwtqm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163tsymfvpt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163bvfevmag.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163bkmglwwp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163fgfjxpqg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wfecxgza.html

TS:   同 JS
来源：http://www.xuanzx.com/163yjyjjjca.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163sokjlicg.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ohanajtb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163seiqnrup.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163cxsqfqks.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qrdrzcyl.html

Py:   from module import func
来源：http://www.xuanzx.com/163ymsvyjod.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ekwafsbu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163oqqwcvaz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163emeiwvqf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163hbonlpqw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163dnlgbpaq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163fhkvrcmp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ciksyeba.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163lgvxhecj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ucklmfhi.html


<!-- 参考信息 -->