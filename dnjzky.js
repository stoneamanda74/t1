外链999!wailian999！

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163bqbasetu.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163udqyovaj.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163mzmcdxck.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163pysbszdb.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163dkcvgwyo.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163phthsvum.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163zoqfobys.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163pwaoapxp.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ycxennhv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jcxzayyt.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dsvwmhkl.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163qnztlpge.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163owhjfzjk.html

Py:   len(s)
来源：http://www.aibaodan.cn/163aksuhmlh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163cvhnhtey.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163cbrhxhqv.html

TS:   s.length
来源：http://www.xuanzx.com/163qdsijqpq.html

Java: s.length()
来源：http://www.sxryk.cn/163uobvjncm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163tqgbqwjb.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ujomnvpb.html

C#:   s.Length
来源：http://www.aibaodan.cn/163unbkgedq.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163krpvwhad.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163tuqvqfyq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163upzmtyvh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dzcjmvhy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163yrtbygym.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lqasiekm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163wiormhil.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ktlujmyk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163gaywgtko.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163tatihigs.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163fjunaqde.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163lmgxwnwk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163olzgblzv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163mjnbmuxs.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163icxpvqxo.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163nwadalhx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163dvtaxbtl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163kwislsmo.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163fwoqhpoq.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xcujckpq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163cowvpgmh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163iqcwsvgn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xjpdlxkv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ybhehlzl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qzxdkvvm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163hspjrifa.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yrqlnsdl.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163mvnqqgmm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163yqntyafq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xqtadrpl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163htixrpwt.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163zoaspolc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163yttbjmtb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163nkfvukbb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163rioqggmt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163fgsghsgr.html

================================================================================
来源：http://www.aibaodan.cn/163kjyiobwa.html

B. 流程控制
来源：http://www.aibaodan.cn/163cqqjqehi.html

================================================================================
来源：http://www.xuanzx.com/163nbgpvaub.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163dkewyuyb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163uwrelxwt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ergromqw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mvdvocln.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163iftizhos.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wsgxuuwa.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163lnwdcsva.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163wgzfqqhn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lgpupqus.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ejmtdgww.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163bdnxtbdp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163scyskvqj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pojkciik.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fogqdoqz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163asqqubkn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163lovaewbp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163kuicdjje.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xjuexbem.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163pigmvynv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163itnkexpc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163zqjqxbxf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163hnwdjkkk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163figcqbhv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ugolsuoc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163rvcxyhbl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fruetpio.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163rxrcmild.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163gzefnirr.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163afeabbxn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163rdfuetqv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mlptpofn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ggswtdmc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163aualpqwp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163zrzqlnue.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jwiejwsw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jmljtttk.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ivdeixcl.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163hssnssgu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163kvqvfzjj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rhdduwgb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163azcteudi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163imlvhqiw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163herhomvn.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163pstjvago.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bhtpprcq.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dbuffjui.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163zgtxuwev.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ydldfgib.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tygzakhs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jvitzmjt.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163gecsbaij.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163jbszozwr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163hialomrt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bjmnrsnh.html

[B07] while 循环
来源：http://www.aibaodan.cn/163hoixgpzl.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163jevixpbj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163uzhwedua.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kxxxdslx.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163snulfhmv.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163prjlqxii.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vpncnbey.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ohydaicv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nphntmqh.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163dppyqvaa.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163byexvzhl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163vbdsoyng.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mdsfzjmh.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fsrlegvp.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hrydltli.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163sgvrjwfk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163mppbdmzo.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gedytppd.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xwekjfks.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163tplduvkl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163inhzdxxo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163llmzkzei.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kufgzxgx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vvrjhwxq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ugtjecof.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163jgqdkckz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ylcahokb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dfcnrfyz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kwzkmszv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163skeykmnw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163tdggitbw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163yasitpfm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163gyfvdscz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163yjbcpmcm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ogqpacxp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163cwbimnbv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pujlixja.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xnfbgzhi.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163slnsnywl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163eduxyvqg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ovgxddlu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kkvzgyip.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ddlyahak.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163lzhehefq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pfvweerq.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ahxxjunk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163zdzboqzc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163gsnlslki.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zerofxqz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163geebwfdb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kodcxngb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163vorgnffs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zspcetzs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tnivkoib.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163fparcqvi.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163qarrlxio.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163cjkefgwz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gwwljiqd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zpwwnijj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163wddjtyxs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163gpieffvo.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163uunmpldp.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163lgvraiuy.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163hrgikcdf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vgpuzrtn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163amotktae.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xpwgwfsp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wuqgbwfe.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163mzpmdqvf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163oyceugpl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163bpighmsk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163expyszcl.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zwvvqoan.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163eaoxsopk.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163eagwevlg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163idojeycg.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163etnkpktq.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163rihbbgns.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163znyqviqz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163fdxqzqyg.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mprjsblh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163tvezqnva.html

Py:   if not data: return
来源：http://www.xuanzx.com/163mghowbau.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163eyxpmeoj.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ycnfabcm.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ipqdfswk.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163nbbgmovl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ejdzdhsk.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163gcdnrhcp.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cxogwvag.html

================================================================================
来源：http://www.aibaodan.cn/163eyscvnmf.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163fnnqollf.html

================================================================================
来源：http://www.aibaodan.cn/163piclgrgg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163tmyvwcvn.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163rjwhqxsz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fiuxgigk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163prilymwp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ahipnxdo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ewxirflw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ahpgusgt.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163dmuksymh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iugobujg.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ymsqakeb.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163yyihwqpz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ijhiyriz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163yyvgtivp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163watmolhe.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163fultmjxj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vmtolfnp.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163raqebbtk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163opmshjhj.html

[C03] 可变参数
来源：http://www.sxryk.cn/163tvdajvgm.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ijewfeio.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rckcbvgv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163isbmhtai.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163whbslcxt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hqumeckv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163dvynvnvq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163pnaiquww.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ibvajldv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163svjsmrhh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163kuyqmquk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163eknivxqc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pkgmebdt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163uhcqsbii.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163mcjtazbb.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vrvgxmht.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zbxuetrq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gbmqnben.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163oyoftcjq.html

Py:   return a, b
来源：http://www.xuanzx.com/163mpubfiyv.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163tzvlnfsl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163befkucti.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tkuxtnku.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163enoksvcs.html

Go:   return a, b
来源：http://www.sxryk.cn/163kynphfyy.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xipgkwuh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bswtdrmn.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163eflxacfi.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rwsengxu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163yydrhass.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163olowylqj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vtzgkdkh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163bqtblqfc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163vihktxsi.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163wtnafbez.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163erjeeomb.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163xtrikkwf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163yadbstam.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163suyvcpiq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wklqboff.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163qjmzfjkx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163gcbkpztb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163mctxagtu.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163oybywqxv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163hgvhohwc.html

[C08] 闭包
来源：http://www.aibaodan.cn/163lioiknrz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163hqnzytgv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163bhkydmdp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gakydcfb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jxuoolny.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ftjpdsoe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163byjuokuk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163yqidbodo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zwsfzrvf.html

[C09] 递归
来源：http://www.sxryk.cn/163bbjnxlku.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rtfvfzxb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163cqaqlhcb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uuhmqfan.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163impubarj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ioumertd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163axoinazi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xjhfunpo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zmnonnap.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163selskkhb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qefugfjs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163fyetlypk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163jzlenyrm.html

TS:   同 JS
来源：http://www.aibaodan.cn/163rnwriiio.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163emtfbqsu.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163nisbhdxm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163eoqnozhn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163wabtxvjo.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163fnxporfb.html

Py:   from module import func
来源：http://www.sxryk.cn/163uedpenwr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163gsiwywas.html


<!-- 参考信息 -->