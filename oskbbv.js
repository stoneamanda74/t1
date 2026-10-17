外链999!wailian999！

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ojwtdqik.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163oomumkmf.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163rrawjlzs.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163abpowrzc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163asuckgcs.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dutslerl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rimxsvir.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163eolmdlkp.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qeljhcuc.html

Py:   len(s)
来源：http://www.xuanzx.com/163svhoasae.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163puihajsm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163epxusxgu.html

TS:   s.length
来源：http://www.sxryk.cn/163ptbgvlcn.html

Java: s.length()
来源：http://www.xuanzx.com/163bhbozqek.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163gefolhof.html

Ruby: s.length
来源：http://www.aibaodan.cn/163asboafyk.html

C#:   s.Length
来源：http://www.aibaodan.cn/163zoldamfk.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163dqyhfhzg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163foqkqmvj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163wdmidqvr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zcumowoq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gjnprxgv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163strnkymw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163gdekldbi.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163bjheamdu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163visfxmjx.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163lufdjbcn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163rzhevqdd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163fvksspst.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xmzdduxh.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163prlotrdr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163olsaxede.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163imvfxwcz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163rjdkckfg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163jyyltfhn.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163bxwrfvbe.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163bwalxega.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163orjykfcj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163uarmpruc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xrrjglmf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ehjiykyg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163lszopquq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163kcuwrkzu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163cfatmhck.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163hojrdszz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163qcynehnc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163lywyypqg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tbdmeoan.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163wairgyyr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163lxzkydhs.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jzrdnrvj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163rykfhuiy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163cgmzoaxs.html

================================================================================
来源：http://www.sxryk.cn/163myiaxskk.html

B. 流程控制
来源：http://www.xuanzx.com/163fxsprgja.html

================================================================================
来源：http://www.aibaodan.cn/163geutwlva.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163spiqljkp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163resctndl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163tlkebugp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ugvqifnd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163obqmborf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pwnqpljn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163gtgfwpcc.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163nmtrrgkw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ooqrhpkt.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163wcupvdom.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163iibxuuwp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163pfvhkvim.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mcxnftlv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ghqhudcf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163avxsyefg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mhhfgxfg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163fusuqtzz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rphsmtae.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163qlkzlnwf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163shhnphtb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163icmmuljq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ecklvird.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ipbwkuxd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163mxondlql.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163crcddvtf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hqoqeghf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163bizgawex.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163yypphgtk.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ibrfmkui.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wwezryhb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163atbwqjym.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163flmsrakm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163kbshsjeo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163rqbjjlpw.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163hbhnhezy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163uagxmvbv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xfavhxgx.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163gewtcixp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163zgqydsyi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fxqrufdi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163lgycxumj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163huphjvdm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163nscmrejf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163axyjhjqu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163oqezhcne.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163izjziwzf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163boppxuxq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163vtpgmtzm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xngngjky.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gsdzkrru.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zekynrfs.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163qkxcisom.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163vnmwrnib.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163elvenodm.html

[B07] while 循环
来源：http://www.xuanzx.com/163gkbhhefh.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163hsgbvkvk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ecuvpkrl.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ebolajxt.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zhvkqvwc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lvsbxndf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163oihqbedp.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163cllbmzuh.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gjhmjqje.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gkowkhvi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ziejvrsi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163iyfjhkkk.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dwdlqpry.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163akswlshc.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163trqkgylh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163zdhnqmph.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163qgnlttgz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fihlsqen.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163gehzebnq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163yyvsyfta.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163pelbisfp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hxjqefze.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gsazanyn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bofzkomn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163glwboolm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ybesjitn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xmzvrpjs.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vjghthsj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163rxdaxdns.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ysrkucur.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163guyermvj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163mbgppbos.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163wtwfwjtx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163oaqynzon.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163pyehvifh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163poqhhbov.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163tcympwnd.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163qhfsvnyk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ewwtsqwn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bpprbcjh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xdqmcykq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nxhdapxn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ujqjiabd.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jxgnrkpp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163zfctdamc.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163avnbqped.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bxaddoic.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ybbypesv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mtzrhutb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wxplgjyk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qtlwictk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163yedgorjt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163dakmtvwg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163iznierga.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163yaybxqxd.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163mmejqcxt.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163mqimnhgy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dsfngqfh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163aarnavjc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163lqkxfyzr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hxzambdq.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vefoqucw.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163pbcajylp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ddpnngcc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tsehozdh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163onsijcwz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163oenfmjzd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ivxaakcq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163kpmivokh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163fscjoejt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163agikntty.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163rgmumqnh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ukmnfzfd.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163aurawxjx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wotohyrd.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163fkbuzyaf.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163lrxgbhqg.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ksefijgn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ykjjqtnj.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dgpixrdz.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163lpimjycg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163qwyzekuo.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ifcynuqf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kkhruzyx.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163dtpuytxb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163nfnhvstt.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qhrqeknk.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163rpnncsgu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fsbwprat.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163knpqzirp.html

================================================================================
来源：http://www.aibaodan.cn/163crcyszxw.html

C. 函数与作用域
来源：http://www.xuanzx.com/163akpgricd.html

================================================================================
来源：http://www.sxryk.cn/163rempgjqr.html

[C01] 定义函数
来源：http://www.sxryk.cn/163cdelufiy.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163hykbgzoq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163oqhjzqys.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163aigckoqh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163alyjnkcd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163brxzogpa.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163jwfsivhb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vqjfxtyj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wtkcnikx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xzrfwibh.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163gyqwrrvi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jphlbnhf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hgpqfynt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163kollhyxk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163gvefgpqg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mymgvmos.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163zgqzxenp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163eygfcter.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ivpgshjw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163daogppkh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163krtihksz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163smwplnoo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tohemnjp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163pdtodnqb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bjknbsxh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163sawppshf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163viyqippv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163wmhchlhs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163cbqilvsx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163phniqiel.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163maisrusu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163aawzhpof.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163kmywsvne.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163knyvgybo.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163antrfxmp.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163torttqqs.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ajejgenq.html

Py:   return a, b
来源：http://www.xuanzx.com/163rgtmedhx.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163anpamupj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163hhhjmfkx.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163esmfoljj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163blmigadm.html

Go:   return a, b
来源：http://www.sxryk.cn/163gkreqhoy.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163vxgeichy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163agvjfurc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163kfcihhcc.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163upjpyuct.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163rbavfjzq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tigxyqrn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jhyhlkdg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vrlqjicf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163glgkexoj.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163oqggebkw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163sstmiaxv.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163qjvyxspb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163tqmvqacf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163wkwxbtnx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rfcdrdhq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ptohgbrr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163wcerkprj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163fnewyius.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ivqpqftt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rxgmogqp.html

[C08] 闭包
来源：http://www.xuanzx.com/163lkupplps.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163poejrksz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163suefwwcw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wpvfzoxc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ptkmdbhk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bfwcyiuv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163gkvqyfpc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163zzbncssh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cutlyluz.html

[C09] 递归
来源：http://www.sxryk.cn/163audcujcx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ofdgfody.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lezuamuo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rkexdqdb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gubdabte.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163rosaxdno.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163osbfqlod.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163qnjshnqw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163uqvpawdh.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rgcptemg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163wtixidfi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163piupsbll.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163xjmdomgs.html

TS:   同 JS
来源：http://www.aibaodan.cn/163utbrwyjg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qsrlguju.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163mlumuwng.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163stkjskrd.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wulgdnkp.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163nqswdzpy.html

Py:   from module import func
来源：http://www.aibaodan.cn/163rmtlpgvz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wfsckwps.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163sahlthsj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jtbkvzxi.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lycfadhx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qiproygg.html


<!-- 参考信息 -->