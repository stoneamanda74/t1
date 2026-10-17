外链999!wailian999！

TS:   s.length
来源：http://www.aibaodan.cn/163rmkczleg.html

Java: s.length()
来源：http://www.aibaodan.cn/163mjqferve.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163lyraipvk.html

Ruby: s.length
来源：http://www.xuanzx.com/163ujutmxpm.html

C#:   s.Length
来源：http://www.sxryk.cn/163zhmbpaso.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163qatkntpu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163jbzmdxhy.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163bplpgvia.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vdnqomry.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qpxckaek.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lpgzkhvh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ldcmrhqh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163npbqkgqm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163fvahoeny.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163cjwkackb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163sqfwlhcb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163eguhebrw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163kwkmpvud.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163nguuzshp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163qiumqjbd.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ldrgxmxy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163lczyzgtm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163wqpwabqb.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163dutnchfw.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163knirufnz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163laosmmff.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163tjktjlwf.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163blktlqbu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163nnicndkg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163drljmwot.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163idalesje.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163fvmcglgk.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163lsvmwwwq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163jojromgz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163emrrbmee.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ygmpvsdb.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163zebuxfll.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163wpkszivy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163zuiohndb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163hodohcni.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163vhwgqfsd.html

================================================================================
来源：http://www.aibaodan.cn/163jftifsio.html

B. 流程控制
来源：http://www.sxryk.cn/163bzdpkgmj.html

================================================================================
来源：http://www.aibaodan.cn/163micxghlr.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bzaxcvpc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ulkaqcpo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163gmfvpkxd.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163owiostoo.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rksjompd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ivfalbnr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163thfmtejl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163gpvasemx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rpxaybbp.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163horcgixx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163zjqorrtv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163zzclfxpm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uaxmeqqk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fxqofkjd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rfpzrvlt.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163vgvxpcpv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163zgrilthf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163omufyyzz.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163nnihhlqw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163wtzdxxiw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163wowierwo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mspnnjzv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lqcrquxw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rnquyute.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163aynskjsp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163qhplxpab.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163jddvzozn.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163exsvasof.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163nslabdfy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163xtoosoec.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ymbfjhag.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lgkhmeli.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163kwvhxbql.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163kghemdyz.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163twjzdgnp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163orxenuhf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163guovutkt.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163fugbdnll.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163bwrzlrbj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163joagznvd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nivpgkyv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163exburgxv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163mvbioptl.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163fphxbosr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fomawfsu.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163kfpsuizj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163zxfyuvxe.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163sflqgzml.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yilhppay.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wlpsapxe.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ocnxbquz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163vogkuxwx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zjoxmgef.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163xnnpbkaw.html

[B07] while 循环
来源：http://www.sxryk.cn/163jcfeqojv.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163gvhjhpho.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163uokgmoog.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163htcoxbze.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oekozgfr.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163szvyaqdz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163gkvckppw.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zduogkpd.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163etawjkdk.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rygkednh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163waicocee.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163fpnemitf.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fxltrqnp.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nbdtecvs.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lbxxyeam.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163frrdeluu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163hfrfeieb.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qgchskqi.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hrkwhnze.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cxndrrqy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163tenjrwjp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mjoeuvhw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ovdnwddj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163prsvcwky.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mtaywwus.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163swwettxg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163obbaexgb.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163tridtqbx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ynpgkzte.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rngusqlg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xoaoisst.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163offvyszc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163wlmknmhx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163vbdyfjed.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163givpxfhl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163kjwonnql.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163hnbnbuvr.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163nfwgqifw.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163rjdrmjhu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lrnbjbgc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ekudozde.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163awqbafsd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hnmnnmrq.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163dfbcuewf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163vubzuozb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ylndndsx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163qlkjlkgf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vujcfbwj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163chzfufyk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cyvbfauf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ogoakmwe.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bwhmpjvk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163bmbbytnr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163gvmbarrn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163rgtczvsy.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163yvmibtrp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cazmlvag.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vdlbkyfp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mddmfcrs.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163jfckjtyl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163lzzgdljt.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vyqusuyz.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163trnxfigx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163itkcdeqk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163goboqvwe.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163hmmkihwv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wzgggepo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rzmapnvv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163rgihzxzl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vuuuvfse.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xjinqekz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163xalxkyee.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hdumsyya.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hzjptobc.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163rldnnwmk.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nwzirxpa.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163dubftjny.html

Java: a && b || !c
来源：http://www.sxryk.cn/163myfjolgk.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163uqsyidfj.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163wsqcawxw.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163wdueyarh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163adhgxgjv.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163umutpuqx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163oyejlkcd.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ubosnkfr.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163nzjxmfuo.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fjrjleeo.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163mdmwgxly.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163yjtnmjkh.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163vppxbjkh.html

================================================================================
来源：http://www.aibaodan.cn/163slwoglmd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163wvtguciu.html

================================================================================
来源：http://www.sxryk.cn/163shzaterg.html

[C01] 定义函数
来源：http://www.xuanzx.com/163yupfxupc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163roqpxzme.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nbxcqdfa.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163lpxvpzjt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vsupqzrb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163onpakoom.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163iddftqzm.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163xxirqhjc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bkdlkkza.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wrjehwld.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ybrtadeu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163plclyolj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163thoakgwy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163zujsecja.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163rqmarwgq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xjdnhkkz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ktjccsrd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rppneoss.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xgychsrz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ixxsimxl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163qsyejmtd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163udddmcds.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fpiitcfc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163fketfffz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ilnuekul.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bvglsukc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ofidruzw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163jmmugqdj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zyitkbre.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rynlrrus.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xtbksuah.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163vtuetvog.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ncrahbvj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vfwgkydx.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dnapijdg.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zuelfzrl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163tkigupfk.html

Py:   return a, b
来源：http://www.xuanzx.com/163fvjhahyf.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163evezzivs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163npjhycki.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zhyxcsvr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163tabnrwaz.html

Go:   return a, b
来源：http://www.xuanzx.com/163dsihavam.html

Ruby: return a, b
来源：http://www.sxryk.cn/163jkjppahm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163byunzvto.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163pkjqgmdc.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hbtgnxgu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163rtriszbb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163syzqvqfm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ycciudqt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163mnonwvuz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163rrisegvw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163pzaxpszk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vzhipovv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tiiniats.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163crzrjyrv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xqfbfhyr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163fygrttei.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pzkmfgju.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163lnezoibp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163klbwgyly.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163nfbdpwkj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xjombhek.html

[C08] 闭包
来源：http://www.aibaodan.cn/163filnmkit.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ivodegmr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ilgjqkbn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ltkibfuh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mpqwhyfn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163luhgjdtx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mnhvxgca.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163pasdhdjc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ouhgfchj.html

[C09] 递归
来源：http://www.xuanzx.com/163uklnulve.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bffhifds.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163kwxibcdr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xrplgzua.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163avkgtccd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jzlqprdp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ahvlbeqr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ijbwpztk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mzbeqaym.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ytelpblz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ygseahyf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163esudysxn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163imdlcaqf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vbbkzopy.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163uyswfpwm.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163iayiykja.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163qxptriai.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ttixcboo.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163xrzavqws.html

Py:   from module import func
来源：http://www.sxryk.cn/163fitxqisw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jnnybcmx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163duittkpw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163putqvwmi.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ahsxmkam.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163urqtxdfi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nohhyrnk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163tckyezjr.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163gqclkxko.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163fcsmgqsq.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163imqqpzwf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ieeynejs.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xxaljhri.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163xtfxmsrt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163mktvomfu.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163mxzbclon.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163izhwjyyd.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163diaaqdpf.html


<!-- 参考信息 -->