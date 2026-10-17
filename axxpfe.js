外链999!wailian999！

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ubxfsjtt.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163omusaljz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rrnctduj.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163zugztuyi.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163mmdvdvfe.html

Py:   len(s)
来源：http://www.aibaodan.cn/163muvcfjmz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163zdlsnjom.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ullrcpnb.html

TS:   s.length
来源：http://www.xuanzx.com/163jxvngelm.html

Java: s.length()
来源：http://www.sxryk.cn/163zpsbysvi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163cdehkigw.html

Ruby: s.length
来源：http://www.sxryk.cn/163eplpzlvo.html

C#:   s.Length
来源：http://www.aibaodan.cn/163hvenpkys.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163cddegczq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163cfyfstdf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163zwpxhfrk.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163swcysqyc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cauritaj.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mksiserm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163dtmbjofc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163wzeqhwhq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163dqzkgqry.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163uacvihdg.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163tekcghbl.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163scjdubnv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163jxyzvrfo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dvrpdzbx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163bxldomjx.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ljmfdmjy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163myirhofu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163crmzkqqx.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163mibptaez.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163xbjsrebm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163yvsorszr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163eqklnccl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163nrwaeatd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163khsiupsy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163qhudjohq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163pchhhtjs.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163tdtddmjg.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163nlvcwpef.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163gwlxdzam.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vedbdfhq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163vhegwspx.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163pfoxhtzg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163teafevwi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163ffctpmbj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163eydkeulg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163vvrxynrm.html

================================================================================
来源：http://www.xuanzx.com/163srhhpbes.html

B. 流程控制
来源：http://www.xuanzx.com/163rxgpxfpo.html

================================================================================
来源：http://www.sxryk.cn/163qriiryok.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163omyysybr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163sjpyxszy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163pjtktxpn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xghehtgj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pugqxami.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zmrotykm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163zypfucts.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163okaquzxg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ciaufycq.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163vpoaoolt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ouynmnmt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163zgyfykpz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ceeltofz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sxytinwn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rdybyxdv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163lwdtrsvr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163cnrvedoj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qongpabe.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163impdosde.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bhboxzmc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163zbpfhmfl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163wwepwxsa.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gmsxfjko.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ayjhqqgg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163uchhyfdd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163denepmoj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163usfjvuqw.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163xvafyuyz.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ntkxgsiz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163xghbxgvw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cpvfveia.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163pjqdygzh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hslaeskr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163pmttzxif.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163yiaozsaj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163krsnrlfn.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163bhvxnvob.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163mrurpjkg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163rnqzdlmo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ujwkgvjm.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163yaxzgkxo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163nfvmutbf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163acvrwhay.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163yhjhmsit.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163npamwpqx.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163udkfmxqa.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163akudcxfk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163bwujcfkp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bqduyflc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ubyhnanh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163xkpqtgzx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163blgltjtg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xokrpexv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163shzvryxx.html

[B07] while 循环
来源：http://www.sxryk.cn/163mgovsebf.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163wjysunfl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163bgqrtejh.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oicljnjf.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pgmjhmkf.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ghuzgwpc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163bgdmsejm.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163xophecpq.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163abqtgdke.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qgpovimd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163dqicvzyo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163cskaxman.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cxijgbfm.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tzerpciw.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mjawgxbd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163lgxbgwpw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163jqeeihov.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163owwyrjaa.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163sgzfijzq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163keztbnnr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163scwcsfmj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wliywjjn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dqewbqhc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hcxbkdwx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163zhbqfzqn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163sczbftox.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tfldhpzq.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163hguvfqdj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163smnmgmsp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163tiaohgjd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163cjdvgdqv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qpwxxaih.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ebbrxlmr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ssqlhyhx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163recginrc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hewzopjo.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163gqjcrhsv.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163piexvzfs.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163hnidqlvh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jzapfomq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ntnumojw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163gnjkchbs.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163bmlqqszb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163fddobkqe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163yohepsax.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163opizdnif.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163vyqywrdf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bqrpyeev.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bsyfjupj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ftbqdfqe.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163whgbuydk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wntrjxub.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163osxcvfgr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163yxuxvbpi.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163feyyhlui.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163tkotlsdq.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ejfmoemx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163oefddzva.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163efmsyboi.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163mgvvurpg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163lhpxzybn.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163boeowdij.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rqwekqbj.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163gxqamiwd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163mephrroe.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163zjnmkbdd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ephzlfuv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163peagumzc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gnwbwffk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163jjelogfv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163zdvhktsz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zmzgnnua.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xsktbwxj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163fsqzqhob.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163xnhhedrz.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163qbgngmix.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163xrwddqim.html

Java: a && b || !c
来源：http://www.sxryk.cn/163wjjwwsnw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163uqnbnulf.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cvwdwnco.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163bytieito.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xosiyzmn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nogkiufi.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wzjuoden.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163crfxxrjl.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163shnuypky.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163hzxkalgg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163zvkokrhu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fsqxsxqr.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163lbglncxe.html

================================================================================
来源：http://www.xuanzx.com/163zhuwwkpw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163uccubvql.html

================================================================================
来源：http://www.aibaodan.cn/163ytlfuapl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163dxtfcnlo.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qeywcrok.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lmpsmhvd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163exbfxsef.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nofltfek.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iauagudt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163phfyjqqj.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163amxiejlk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163shozzktj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ealepphu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163glszykah.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163mmwwwjsd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163voaqlpqk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163jljjgjzf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jrwumfsc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163opxlfnep.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163korbhxko.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dvabekey.html

[C03] 可变参数
来源：http://www.sxryk.cn/163niqyvqbm.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163dwsbmwqw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163aovpadbo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163flzqxfqi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jxagqhac.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163kuhhcmpc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pkqbqawc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163dpoixedx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163busssjbi.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163eytclgjs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163tkgivjrx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rmojwiob.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163qtwyoqqe.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dsjbnioi.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163njzspdoj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ragceckr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dbzsrdfn.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lbskuuly.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163gftoqcat.html

Py:   return a, b
来源：http://www.sxryk.cn/163skvofnsa.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fzdpjjev.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ushktrjv.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163tbmswyda.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ixrnyxrg.html

Go:   return a, b
来源：http://www.sxryk.cn/163jzyaaoup.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fxihogyn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wtoapqnr.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ycdlbuip.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163mlhhsack.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ctjucztt.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163slelosfz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163oiqeydzk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163igdlbedy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163devfjvmz.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163icqgyvfu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163apxsrkes.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163hzigrcdh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163fejkhofq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163egxgvuzm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163gzgvcdmd.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ucxefoiv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163odgnwzay.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zloskjxu.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163myqnkeuq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ndinpjqd.html

[C08] 闭包
来源：http://www.sxryk.cn/163jelowflc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163agycsybn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163itcxyphs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bywmdxsh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tgjwcarx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qcbgshcd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163amvbuaxa.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ujngrmkl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163roeclrkw.html

[C09] 递归
来源：http://www.sxryk.cn/163yuuyveme.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163yxomdzor.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ojqkyzxd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uffnufhh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kajenead.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163gmwbzdln.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163xmeapbvm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pkbblvbr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163wdhaiwtz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gptwcvwe.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163cbbshmrg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163pbzbdqdl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163akpujcqj.html

TS:   同 JS
来源：http://www.sxryk.cn/163vjiolfgh.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163erkkwfga.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163jkhbrcih.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vbgxfoxl.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jnlzqehn.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163xfdxezll.html

Py:   from module import func
来源：http://www.aibaodan.cn/163xvoohsnb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ungzznbs.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163lrkehifv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ynoorcnp.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163twqwazvm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163bzzzungg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163abaqlnpa.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163lgpmrxsh.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ffgtzibo.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163rholvinv.html


<!-- 参考信息 -->