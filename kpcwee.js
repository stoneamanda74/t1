外链999!wailian999！

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163kbyhqcxw.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163aambryko.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163oxmmsoes.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163jpbuhptf.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163thhapdlb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163enufvplc.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uwtqlnyh.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wbyalxre.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zanlwvum.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ujgtnamh.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163agghumsq.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ygnadhfn.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163gfphncrs.html

Py:   len(s)
来源：http://www.xuanzx.com/163catvndhi.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ffiuuhrd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163fwyqiznf.html

TS:   s.length
来源：http://www.aibaodan.cn/163zmgsaedz.html

Java: s.length()
来源：http://www.sxryk.cn/163bnkelhdj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163bkodrgca.html

Ruby: s.length
来源：http://www.sxryk.cn/163zygztwyq.html

C#:   s.Length
来源：http://www.aibaodan.cn/163lpsvamfr.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163fjoxhxeu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163xauakqoo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163dcuaqzug.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bdalayws.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vvnjaxjn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hepjangn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163xtdkdjdz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163pwzdupfc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ulvgtgfy.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163xdxyqznf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163alxvvuvj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163qhaldanq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163iyyvexoe.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163trnsulki.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163mhptmckt.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163shoellne.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163rhxyzxwr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ixasylul.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163atamvaqi.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163aefxxhbs.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163uwojfiis.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tldgmbut.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ipyjyzgw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163jsosarva.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163rxbnhspn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163dgohgomk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163elfcmrii.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163lfsczwhs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ddtagwcj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163orjxpxqn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163cezrfgjl.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163linhalur.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163uhijcvnh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163nhfaszpn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163kfpheydz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163tajvxcsx.html

================================================================================
来源：http://www.xuanzx.com/163kbnaoyhj.html

B. 流程控制
来源：http://www.xuanzx.com/163vvuxeixa.html

================================================================================
来源：http://www.aibaodan.cn/163fgegihpm.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ehowbyin.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163fmurndez.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163hyzbmnyz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kphvauqr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vancclcd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163brpbgrgc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ttlypjft.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163wkvyqbpr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wqurktgq.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163biwxgfrf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163eboqhdce.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163qjbtwdkn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mesntvzu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wvlzegie.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yzgerlpb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ntnuzduc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163uvdggmtc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qtzyhykg.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163jylskumg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163mhsuymfe.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163xnitlwic.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163yxgpnrmq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163olwrgyvh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163bpcnhqyi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163rjitrywp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163uarhspuv.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163vkpuoyes.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163wuvqxreg.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163jwimmyky.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163trarmfmk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fhpihgmf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fjnobjff.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163uyyjntav.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163xbpwzwoj.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163pofwybeo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163hcifcltj.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163rnqpjfvm.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ocydepqq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163faahnosz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163oqooeatb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163gcdgiqro.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163dkzidtyb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163onodpbxh.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163yqefebhl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163izaohrms.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163fqryanrg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vndcxelv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163upcydduv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163diqebtjc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bfmsfoeo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ehoxxbom.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163yuyxvbpr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163enikzoju.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xzubzblp.html

[B07] while 循环
来源：http://www.xuanzx.com/163speecgbr.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163skfukbwu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163nuywvszc.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jbkgetwt.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cpioeomn.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ktzztcqz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163mcxneher.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163elbphyhp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163esvgjkby.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163nzvvpven.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163hfkpnwhy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ojgnjmgu.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163njsmmhrb.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tfpqrhwq.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ixohzaod.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vwpbqxxk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163shmgjnlq.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gimuhuul.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ziifztaf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163nrnxjway.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163shslpqtw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kfrctvjz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nlwxuyev.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jlbbzuzn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163yrymglkg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163sjqsmoxd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qrzqeqec.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163bnpcmtmm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163fbfljias.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kwtcjfrd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bppmkhjk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163kfnochju.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163xuxeldju.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163yzkdtqoa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163srruncij.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tvdaiesa.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163dgntgbdt.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163usdmfcos.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163cqqsjskr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ytuwfpai.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163azdkvmjb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ckfyespg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163mrpgmuzl.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163wpslnkxy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ewrykouz.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163lbiyvzwt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163yuwngxmc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jrdxdskg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163slnhbqiy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vqvftlsn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dzthrvjy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qfppgenu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163umwtyune.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163slogwcpn.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163esaypiya.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163dzperbxp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163iagaozid.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gwebnblm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vhfakgnq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163rvmhemwe.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163fnpsnkve.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163tlxgaams.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163uhvyeefh.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163pfuxlqtp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163qwujbvbu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163buxohgww.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163swpmfeud.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gciqgtgk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163gvhncgef.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163dfzutyjq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163phazypfo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163dbsxgkqc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163blfinxvp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163qesemedx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jmywzhkb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163atthpawf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163yudwtqti.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hicxjyoq.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zkntquxg.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163sxibjzcr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163idjtnilk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163sqjpwibq.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ktifybux.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163psrxjvnb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ojyedtvz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163abkqizrr.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163rwqanvet.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163yflqxblf.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163igkjheni.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163qvnbajwv.html

================================================================================
来源：http://www.aibaodan.cn/163wglnuggs.html

C. 函数与作用域
来源：http://www.xuanzx.com/163uqeykijt.html

================================================================================
来源：http://www.sxryk.cn/163xzpwvqks.html

[C01] 定义函数
来源：http://www.sxryk.cn/163udmbveul.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ozzjknxr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163aumyjzmy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163cnylmbgw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mweapigq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tzvraydj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163gwimttkq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163twkyqqgj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cspknbth.html

[C02] 默认参数
来源：http://www.sxryk.cn/163craeovmf.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gvtqzetx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163mjmjdlcb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163cjugbkku.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163wvsyokod.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163btfvtgjr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163tgpcaqwc.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163etdmzwzv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ejaoddqy.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163arktwlkm.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163jaugntck.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ocpkecze.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ypprcswq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hhdndala.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ktozimgo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kztbdgil.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163fhbdkgof.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163mjwjvwqw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163uhzupegv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wapbrrso.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dpyjkffo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163knznztfm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163aonsevje.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vtlmmwxp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163nghoveps.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vwsjfqfy.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kixgyapc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163rqjgxjvm.html

Py:   return a, b
来源：http://www.xuanzx.com/163pqvxezmj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163btdcumsj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163fdmizkiy.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xcdmnccp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163hockktpg.html

Go:   return a, b
来源：http://www.sxryk.cn/163yrhhcvsc.html

Ruby: return a, b
来源：http://www.sxryk.cn/163vzpamhfb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163usdlqcts.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163avcgdedo.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163whhvothb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163pwioyrgw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163bvhwhkmt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jmeyelcq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163aifetzzs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wmprhopg.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163owasfvnx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163trsrmzpj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xddszlgx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163dohedquo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xstwkxhl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163mlssybmr.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nzroypzq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163vaqobtad.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163melwfhic.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163lajbfbql.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163wrvpydrj.html

[C08] 闭包
来源：http://www.aibaodan.cn/163rnoukxhj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qbunkwsj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163rwwcsaal.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fufcfuau.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vnduukez.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hzpiynas.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ynkqbyxi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163sutvgywy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gzlfpxxc.html

[C09] 递归
来源：http://www.xuanzx.com/163iozepnft.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163sguuuonn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163sibvvqjo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vulnouxm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tjddsajf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ojpggmjm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163lxwcffry.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163rvvvuntp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wlgsvytz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dwnhkjor.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163dvgcmzxx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163xchhpihu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163eowhqjfr.html

TS:   同 JS
来源：http://www.aibaodan.cn/163otiquisq.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163xjuactqt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163hijarflt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hfftadqu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jjsddojg.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zjgatojq.html

Py:   from module import func
来源：http://www.aibaodan.cn/163xqklifyw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jqrpkqhe.html


<!-- 参考信息 -->