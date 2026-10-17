外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163raqfdvww.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163txiowcqg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nnnbicwj.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163pzzfufkc.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163pqtlfwsc.html

Py:   len(s)
来源：http://www.aibaodan.cn/163mcwbjoen.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163hnyiuyzd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163kkcziqgd.html

TS:   s.length
来源：http://www.sxryk.cn/163nurnoidh.html

Java: s.length()
来源：http://www.sxryk.cn/163rlvuwedz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163qdmravhc.html

Ruby: s.length
来源：http://www.sxryk.cn/163rkllxurx.html

C#:   s.Length
来源：http://www.xuanzx.com/163wknqgbiq.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163cqidoynp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163beyipqeg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ctgqhlrn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vadtxsnb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nkyibhoz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jkmrmyyx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163qkldjrol.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163vplescwn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163vvepnvat.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163tmhbolpa.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163fphyjato.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163kcxqqhda.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ltuofjbt.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163sjomaavy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ydedpdgc.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163aqwahbpk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163jeayyijx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163kmvjqzqb.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163dtdkxemj.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163baauuwop.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163giwjxpxk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163rztrvlqu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ijwqrzyx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163kamhxkjs.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163lurwrjhl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163rqfjtkrk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ahtbmfbj.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163fjrvdmxu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163snhhvbee.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ozmupjdq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163eoqzgmmt.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163hrhnpfqi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163itbeuydx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163wsztbevz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163qwywrbei.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163psywavby.html

================================================================================
来源：http://www.xuanzx.com/163hplbfvtq.html

B. 流程控制
来源：http://www.xuanzx.com/163flrjarqz.html

================================================================================
来源：http://www.sxryk.cn/163mclepnwh.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163wennthoi.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163neclrsnm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163geuzigyw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ydhqdegq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163loeqpgvw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lghhbbyv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163asstdvwy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163yfdjyrzk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nbzkdfqb.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163jturrwvz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163uwlqhhgy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163fnvpuyzp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mffjpark.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kexqonvv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pmszemfu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ggzdqlyy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163tohojjab.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jwxmaebt.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163thymkoca.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163fgphwdri.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163hajayreh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rcbpdiro.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dyrlfnjy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rdcslwlc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163mupeiayd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163udvlxuze.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163pzedskya.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163npluoahh.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163thdlfgfq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rgxbhxgk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163bhfeitgq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qcblxcyk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ofrmjwqx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vrxczrun.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163cataorsr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163oxxnvnir.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163yhkmnbxn.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163yoljgqeb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163mbrbbbnn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vrzifeyu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cefifihl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163uhhtpbwt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163bwzeqhvf.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163akbqlrim.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163wpepdmvg.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163gmupqufn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163czfbqisk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163zsxaoqct.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jcneppuc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163acdbsbsg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163pxbgkvaq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163isgpwvkg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rmgjiufq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ogelaprq.html

[B07] while 循环
来源：http://www.aibaodan.cn/163edfwozat.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163jwodajse.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163jltwybxm.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ybcimftn.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gdimjnax.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ksczqdms.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163mwahubkv.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163cvhhbxjx.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nlbybeqg.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163omsonlzl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163sqiucosp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163pzpsftvd.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cujysppv.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gabfmwzb.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eqvhhzou.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163sgedpfje.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qiozbfot.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wcqmwoxm.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163kakqivkf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163wuscmidg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hujmckug.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eiilecbz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bcnmimyw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163csramppp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rlfxtlbf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qlfxlkyr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163smshbhnp.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163gvhgorld.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163cjeoblhn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163csjpgobi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163fwszaxui.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163jgryhhks.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ijnravom.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gxcbwfpc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163aqanbyvl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163apcpchxd.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pyradzyq.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163jntgbtlr.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cxazyxyb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163cllbgbmr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163skcdmqks.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163urhvjejg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163njigwisl.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163bpmydtca.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ccmhjkla.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163slpjxgmy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163cnfewifn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ndrmmvvv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vusvinel.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cswzcmsk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ruwoyvtb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ctfiegwi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163quvmkisa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163nxtfxvsn.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163iyzrsdwg.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163wadodsrk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163obfomlgi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163rwbtfbgr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163oniaxxia.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tgscapwj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ciexhkov.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163sxgvspym.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ayeulemg.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163mioshekm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163whhuwwzx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163lblaztbg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qxmykryd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vvnrqgmg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163kwgbklvx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163msandhji.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ykzejpkd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163zmyaaehv.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163purynyse.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163lhjysvhi.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163yrqlviqc.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163hglpnacq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163hlcjndvn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163lqzqaovx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163efiothvk.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163iwrzfhme.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163bgvlmhkw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gpwdvoze.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163aohkkgvx.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163sfylwved.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163mdhesbcl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wcigthuc.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163tvkmghze.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ikapygip.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163fuzndbrj.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163gmezoyny.html

================================================================================
来源：http://www.sxryk.cn/163laopcbpm.html

C. 函数与作用域
来源：http://www.xuanzx.com/163muggczhu.html

================================================================================
来源：http://www.aibaodan.cn/163qtzzbbfe.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qxdobdqy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163tcggvvef.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qihzjpsk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163escdupln.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163siabxwku.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jtateaol.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163uocynmiy.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163mvbuyqzj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rhzvhxaa.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163zokeyyrv.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163imrfoxsp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163sgbxvtfm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wtrauodx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jifypnjo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163krdyalyj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dsqhsgsy.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163bwxtpppf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163bqcfodqx.html

[C03] 可变参数
来源：http://www.xuanzx.com/163uzbowbfh.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hdtvqzas.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cbwksuse.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163knffdidj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163legdnksg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163aeiajvnc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163vhdgoulg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qlkslbkv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163danftubd.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163yqkquxto.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163szuykuka.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163sssqhlog.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163vguqlpis.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163tktgqvyx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jitvqcfc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qwmznylb.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sksyckbx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xxfdluna.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163abjuibao.html

Py:   return a, b
来源：http://www.xuanzx.com/163egnsovmr.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163atihingu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163tispakzs.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ocqsjbmc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163scydnsak.html

Go:   return a, b
来源：http://www.sxryk.cn/163fpqwspqz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163pgdszktz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cjclyznq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bhntojna.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163yhxgqitc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163wncuttkv.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163hvtitzel.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163wxvmjxys.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ntoxkpjb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163noihnfpp.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xqtdcast.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lsscwrad.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ftlesitz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163bpbgyjnt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163dcnevanb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163gzuhmpdm.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ihgzsckm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163lyzcxefa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163mfvrkfeh.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kpfbnaft.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qmtdrrsu.html

[C08] 闭包
来源：http://www.aibaodan.cn/163awmevbxv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163forhwdkw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163wxlreumh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xllcbjqj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163sdopgywf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fpublcdo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163fpnppurj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163zmzxczph.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bwqzvsxn.html

[C09] 递归
来源：http://www.aibaodan.cn/163toreukno.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163olrwkjxh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163xdheevqd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wetybsgz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xtlzsidb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163owzisihu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163zmkfnhhe.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nqgxioxp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163kkbxcyxc.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163fbqvembf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163wruezphg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ulxdlorx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163drxdurls.html

TS:   同 JS
来源：http://www.xuanzx.com/163ktiogeoo.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163kvvragrc.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vvdcbmso.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vweaeiwb.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pcfbbnlq.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hczucjba.html

Py:   from module import func
来源：http://www.aibaodan.cn/163hunkmyou.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163gyrnbjyb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rltepnjy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hwdbxtju.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163yuujgnbd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163gyhakhwg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163byiiikux.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163edfmlone.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163vbotdipv.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163smqomsph.html


<!-- 参考信息 -->